<template>
	<view class="home">
		<view class="top_nav">
			 <u-tabs :list="navList" lineColor="#F3F4FF"
			 :activeStyle="{
			    color: '#333',
			    fontWeight: 'bold',
			    transform: 'scale(1.05)'
			 }"
			:inactiveStyle="{
			    color: '#888',
			    transform: 'scale(1)'
			}"
			@click="clickNav"></u-tabs>
		</view>
		
		<view class="loading_state" v-show="loadingState">
			<u-skeleton rows="3" title loading avatar ></u-skeleton>
		</view>
		
		<view class="content">
			<view class="item" v-for="(item,index) in dataList" :key="index">
				<forum-item @deleteEvent="deleteEvent" :item="item" :isLike.sync="item.isLike" :like_count.sync=item.like_count></forum-item>
			</view>
		</view>
		
		<view>
			<uni-load-more :status="uniLoad"></uni-load-more>
		</view>
				
		<view class="edit">
			<text class="iconfont icon-a-21-xiugai" @click="goEdit"></text>
		</view>
	</view>
</template>

<script>
	import {store,mutations} from '@/uni_modules/uni-id-pages/common/store.js'
	const db = uniCloud.database()
	const dbCmd = db.command
	export default {
		data() {
			return {
				// 状态
				uniLoad:"more",
				noMore:false,
				// 在type里存储排序方式
				navList:[
					{
						name:"最新",
						type:"publish_date"
					},
					{
						name:"热门",
						type:"view_count"
					}
				],
				// 存储的页面数据
				dataList:[],
				// 骨架屏显示/隐藏
				loadingState:true,
				// 排序的索引值
				navActive:0
				
			}
		},
		onLoad() {
			this.getData()
		},
		// 触底操作
		onReachBottom() {
			this.uniLoad = "loading"
			if(this.noMore){
				return this.uniLoad = "noMore";
			}
			this.getData();
			
		},
		methods: {
			// 父亲配合儿子forum-item进行清空
			deleteEvent(){
				this.dataList=[]
				this.getData()
			},
			// 获取网络数据
			getData(){
				// 联表查询
				let artTemp = db.collection("quanzi_article").where(`deleteState != true`).field("title,user_id,description,picUrls,comment_count,like_count,view_count,publish_date").getTemp();
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				db.collection(artTemp,userTemp).orderBy(this.navList[this.navActive].type,"desc").skip(this.dataList.length).limit(5).get().then(async res=>{
					let idArr = []
					// 旧的数据
					let oldArr = this.dataList;
					if(res.result.data.length == 0){
						this.noMore = true
					}
					// 拼接新的数据
					let resDataArr = [...oldArr,...res.result.data]
					
					// 判断：登陆情况下，运行以下逻辑
					if(store.hasLogin){
						// 遍历数据后循环追加新元素到idArr里
						resDataArr.forEach(item=>{
							idArr.push(item._id)
						})
						// 统一发送请求
						let likeRes = await db.collection("quanzi_like").where({
							// 查询idArr在不在article_id里
							article_id:dbCmd.in(idArr),
							// 查询自己点赞
							user_id:uniCloud.getCurrentUserInfo().uid
						}).get()
						// 筛选之后做一次循环，看一下文章ID是不是在大的数组里面，如果在的话，定义一个isLike
						likeRes.result.data.forEach(item=>{
							let findIndex = resDataArr.findIndex(find=>{
								// 看一下文章ID是不是在大的数组里面
								return item.article_id == find._id
							})
							// 如果在的话，定义一个isLike
							resDataArr[findIndex].isLike = true
						})
					}else{
						// 如果未登录的情况下，不执行代码
						
					}
					this.dataList = resDataArr
					// 请求到数据，将骨架屏隐藏
					this.loadingState = false
				})
			},
			// 点击最新/热门
			clickNav(e){
				this.loadingState = true;
				this.dataList = [];
				// 触底后改成默认值
				this.uniLoad = "more";
				// 将默认的索引值等于点击的索引值
				this.navActive = e.index;
				this.noMore = false
				this.getData()
			},
			// 点击去往发布页面
			goEdit(){
				uni.navigateTo({
					url:"/pages_forum/edit/edit"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
.home{
	.topnav{
		margin-bottom:30rpx;
	}
	.loadingState{
		padding:30rpx;
	}
	.content{
		.item{
			padding:30rpx;
			border-bottom:#F7F7F7 15rpx solid
		}
	}
	.edit{
		width: 120rpx;
		height: 120rpx;
		background: #0199FE;
		border-radius: 50%;
		color:#fff;
		position: fixed;
		z-index: 100;
		bottom:150rpx;
		right: 50rpx;
		display:flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 20rpx rgba(1,153,254,0.8);
		.iconfont{ 
			font-size: 50rpx;
		}
	}
}
</style>
