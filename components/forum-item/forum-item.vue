<template>
	<view class="forumItem">
		<view class="header">
			<view class="userInfo">
				<view class="avatar">
					<image :src="giveDefaultAvatar(item)" mode="aspectFill"></image>
				</view>
				<view class="name">{{giveName(item)}}</view>
				<view class="time">
					<uni-dateformat :date="item.publish_date" format="MM月dd hh:mm" :threshold="[60000,3600000*24*30]"></uni-dateformat>
				</view>
			</view>
			<view class="more" @click="clickMore">
				<text class="iconfont icon-ellipsis"></text>
			</view>
		</view>
		
		<view class="body">
			<view class="title" @click="goDetail">{{item.title}}</view>
			<view class="text" @click="goDetail" v-show="item.description">
				<view class="t">{{item.description}}</view>
			</view>
			<view class="picList" v-show="item.picUrls && item.picUrls.length > 0">
				<!-- 下面做了一个判断：如果发布的图片只有一个，就显示only这个类，改为整张图为圆角 -->
				<view class="pic" :class="item.picUrls.length==1 ? 'only': ''" v-for="(pic,index) in item.picUrls" :key="index">
					<image @click="clickPicPreview(index)" :src="pic" mode="aspectFill"></image>
				</view>					
			</view>
		</view>
		
		<view class="info">
			<view class="box">
				<text class="iconfont icon-a-27-liulan"></text>
				<text>{{item.view_count}}</text>
			</view>
			<view class="box" @click="goDetail">
				<text class="iconfont icon-a-5-xinxi"></text>
				<text>{{item.comment_count && item.comment_count>0 ? item.comment_count : '评论'}}</text>
			</view>
			<view class="box" :class="item.isLike ? 'active' : '' " @click="clickLike">
				<text class="iconfont icon-a-106-xihuan"></text>
				<text>{{item.like_count ? item.like_count : '点赞'}}</text>
			</view>
		</view>
		<u-action-sheet :actions="list" cancelText="取消" :show="sheetShow" 
		:closeOnClickOverlay="true" :closeOnClickAction="true"
		@select="sheetSelect" @close="onClose"></u-action-sheet>
	</view>
</template>

<script>
	import pageJson from "@/pages.json"
	import { giveName,giveDefaultAvatar, likeFun} from "../../utils/tool.js"
	import { store } from "@/uni_modules/uni-id-pages/common/store.js"
	const db = uniCloud.database()
	export default {
		name:"forum-item",
		props:{
			item:{
				type:Object,
				default(){
					return{
						
					}
				}
			},
			isLike:Boolean,
			like_count:Number
		},
		data() {
			return {
				sheetShow:false,
				list:[
					// {
					// 	name:"修改",
					// 	type:"edit",
					// 	disabled:"true"
					// },
					{
						name:"删除",
						type:"delete",
						color:"#F56C6C",
						disabled:"true"
					}
				]
			};
		},
		methods:{
			// 将导入的方法在methods里重新执行一次，然后才能在上面template模板里面直接拿到
			giveName,giveDefaultAvatar,
			// 点赞操作
			clickLike(){
				console.log(this.item);
				if(!store.hasLogin){
					uni.showToast({
						title:"您尚未登录，请登录！",
						icon:"none"
					});
					setTimeout(()=>{
						uni.reLaunch({
							url:"/"+pageJson.uniIdRouter.loginPage
						})
					},1500);
					
					return;
				}
				else{
					// 处理频繁点击的操作
					let time = Date.now();
					// 判断：如果当前点击时间小于1.5秒之前点击时间，则停止点击事件并提示操作频繁
					if(time - this.timeTemp < 1500){
						uni.showToast({
							title:"操作太频繁，请稍后...",
							icon:'none'
						})
						return 
					}
					// 无感操作：不需要等网络请求
					// this.item.isLike ? this.item.like_count-- : this.item.like_count++
					// 点赞按钮立刻高亮/变灰
					// this.item.isLike = !this.item.isLike 
					this.timeTemp = time
					let like_count = this.item.like_count
					this.item.isLike ? like_count-- : like_count++
					let isLike = !this.item.isLike 
					this.$emit("update:isLike",isLike)
					this.$emit("update:like_count",like_count)
					// 调用点赞操作数据库的方法
					likeFun(this.item._id)
				}
			},
			// 点击更多操作
			clickMore(){
				// uniCloud.getCurrentUserInfo()：获取当前用户信息
				let uid = uniCloud.getCurrentUserInfo().uid
				if(uid == this.item.user_id[0]._id || this.uniIDHasRole('admin') || this.uniIDHasRole('webmaster')){
						this.list.forEach(item=>{
							item.disabled = false
						})
				}
				this.sheetShow = true
				
			},
			// 点击选择
			sheetSelect(e){
				this.sheetShow = false
				let type = e.type
				console.log(type);
				// 如果点击的是delete，就删除
				if(type == "delete"){
					this.deleteFun()
				}
			},
			deleteFun(){
				uni.showLoading({
					title:"删除中..."
				})
				db.collection("quanzi_article").doc(this.item._id).update({
					deleteState : true
				}).then(res=>{
					uni.hideLoading();
					uni.showToast({
						title:"删除成功",
						icon:"none"
					})
					this.$emit("deleteEvent",true)
				}).catch(err=>{
					uni.hideLoading()
				})
			},
			// 点击取消弹出框
			onClose(){
				this.sheetShow = false
			},
			// 点击预览图片
			clickPicPreview(index){
				uni.previewImage({
					urls:this.item.picUrls,
					current:index
				})
			},
			// 点击跳转到详情页
			goDetail(){
				uni.navigateTo({
					url:"/pages_forum/detail/detail?id="+this.item._id
				})
			}
		}
	}
</script>

<style lang="scss">
.forumItem{
	.header{
			display:flex;
			font-size: 32rpx;
			align-items: center;
			justify-content: space-between;
			.userInfo{
				display: flex;
				align-items: center;
				.avatar{ 
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					border-radius: 50%;
					overflow: hidden;
					image{ 
						width: 100%;
						height: 100%;
						display: block;
					}
				}
				.name{				
					color:#222;				
					padding-left:10rpx;
				}
				.time{
					color:#888;
					font-size: 22rpx;
					padding-left:20rpx;
				}
			}
			.more{
				padding:5rpx;			
				.iconfont{ 
					font-size: 50rpx;
					color:#888;
				}
			}
		}
		
	.body{
			padding: 15rpx 0 30rpx;
			.title{
				font-size: 44rpx;
				color:#000;
				font-weight: 600;	
				text-align: justify;
			}
			.text{
				padding-top:10rpx;
				padding-bottom:10rpx;
				font-size: 30rpx;
				text-align: justify;
				color:#888;				
				.t{
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;				
					text-overflow: ellipsis;		
					display: -webkit-box;			
					-webkit-line-clamp: 2;			
					line-clamp: 2;					
					-webkit-box-orient: vertical;	
				}
			}
			.picList{
				display: flex;
				padding-top:20rpx;
				.pic{
					width: 225rpx;
					height: 225rpx;
					margin-right: 6rpx;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}	
					&:first-child{
						border-radius: 20rpx 0 0 20rpx;					
					}
					&:last-child{
						border-radius: 0 20rpx 20rpx 0;					
					}
					&.only{
						border-radius: 20rpx;
					}
					
				}
				
			}
		}
}
	.info{
		display: flex;
		align-items: center;
		justify-content:space-around;
		font-size: 26rpx;	
		color:#333;
		.box{
			display: flex;
			align-items: center;			
			padding:15rpx 0 5rpx;
			flex:1;
			display: flex;
			justify-content: center;
			.iconfont{
				font-size: 40rpx;
				padding-right: 10rpx;
			}
		}
		.box.active{
			color: #de2a18;
		}
		
	}
</style>
