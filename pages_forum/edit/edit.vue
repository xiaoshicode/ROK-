<template>
	<view class="edit">
		<view class="title">
			<input type="text" placeholder="请输入标题" placeholder-class="placeholderClass" v-model="artObj.title">
		</view>
		<view class="content">
			<editor class="myEdit" 
			placeholder="写点什么？" 
			show-img-size="" 
			show-img-toolbar="" 
			show-img-resize="" 
			@ready="onEditReady" 
			@focus="onFocus" 
			@statuschange="onStatuschange">
			</editor>
		</view>
		<view class="btnGroup">
			<u-button type="primary" text="发表"  color="#7f41d5" :disabled="!artObj.title.length" @click="onSubmit"></u-button>
		</view>
		<view class="tools" v-if="toolShow">
			<view class="item" @click="clickHead">
				<text class="iconfont icon-zitibiaoti" :class="headShow ? 'active' : ''"></text>
			</view>
			<view class="item" @click="clickBold">
				<text class="iconfont icon-zitijiacu" :class="boldShow ? 'active' : ''"></text>
			</view>
			<view class="item" @click="clickItalic">
				<text class="iconfont icon-zitixieti" :class="italicShow ? 'active' : ''"></text>
			</view>
			<view class="item" @click="clickDivider"><text class="iconfont icon-fengexian"></text></view>
			<view class="item" @click="clickInsertImage"><text class="iconfont icon-charutupian"></text></view>
			<view class="item" @click="eidtCompleted"><text class="iconfont icon-duigou_kuai"></text></view>
		</view>
	</view>
</template>

<script>
	import { getImgSrc,getProvince} from "@/utils/tool.js"
	const db = uniCloud.database()
	export default {                         
		data() {
			return {
				// 富文本工具默认不显示
				toolShow:false,
				// 富文本大标题的状态
				headShow:false,
				// 富文本加粗的状态
				boldShow:false,
				// 富文本斜体的状态
				italicShow:false,
				// 长文
				artObj:{
					title:"",
					content:"",
					// 摘要信息
					description:"",
					picUrls:"",
					province:""
				}, 
			};
		},
		onLoad() {
			getProvince().then(res=>{
				this.artObj.province = res
			})
		},
		methods:{
			// 初始化
			onEditReady(){
				// selectorQuery.exec(callback):在执行所有的请求，请求结果按请求次序构成数组，在callback的第一个参数中返回
				// 通过uni.createSelectorQuery().in(this).select(".myEdit")获取类为myEdit的节点信息,再使用fields获取开启size和context的权限
				uni.createSelectorQuery().in(this).select(".myEdit").fields({
					size:true,
					context:true
				},res=>{
					this.editorCtx = res.context
				}).exec()
			},
			// 检查状态
			checkStatus(name,detail,obj){
				if(detail.hasOwnProperty(name)){
					this[obj] = true;
				}
				else{
					this[obj] = false;
				}
			},
			// 当样式发生改变的时候
			onStatuschange(e){
				let detail = e.detail;
				this.checkStatus("header",detail,"headShow");
				this.checkStatus("bold",detail,"boldShow");
				this.checkStatus("italic",detail,"italicShow");
			},
			// 添加大标题
			clickHead(){
				this.headShow = !this.headShow;
				// this.editorCtx:富文本编辑器的上下文
				this.editorCtx.format("header", this.headShow ? 'h2' : false);
			},
			// 添加加粗效果
			clickBold(){
				this.boldShow = !this.boldShow;
				this.editorCtx.format("bold");
			},
			// 添加斜体效果
			clickItalic(){
				this.italicShow = !this.italicShow;
				this.editorCtx.format("italic");
			},
			// 添加分割线
			clickDivider(){
				this.editorCtx.insertDivider()
			},
			// 添加图片
			clickInsertImage(){
				uni.chooseImage({
					success: async (res) => {
						uni.showLoading({
							title:"上传中，请等待！",
							mask:true
						})
						for (let item of res.tempFiles) {
							// 兼容微信小程序
							// 设置后缀名
							let fileName = item.path.subString(item.path.lastIndexOf("."))
							let randomName = Data.now() + String(Math.random()).substr(3,6)+fileName
							
							let res = await uniCloud.uploadFile({
								// 本地：要上传的文件对象
								filePath:item.path,
								// 使用阿里云存储时，cloudPath为云端文件名
								cloudPath:item.name || randomName
							})
							this.editorCtx.insertImage({
								src:res.fileID
							})
						}
						uni.hideLoading()
					}
				})
			},
			// 点击富文本的确认 修改完成
			eidtCompleted(){
				this.toolShow = false
			},
			// 点击提交按钮
			onSubmit(){
				this.editorCtx.getContents({
					success:res=>{
						this.artObj.description = res.text.slice(0,30)
						this.artObj.content = res.html
						this.artObj.picUrls = getImgSrc(res.html,3)
						uni.showLoading({
							title:"正在发布中...",
						})
						this.addData()
					}
				})
			},
			addData(){
				db.collection("quanzi_article").add({
					...this.artObj
				}).then(res=>{
					uni.hideLoading();
					uni.showToast({
						title:"发布成功",
						icon:"none"
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:"/pages/index/index"
						})
					},500)
				})
			},
			// onFocus:获取焦点，让富文本工具显示出来
			onFocus(){
				this.toolShow = true
			}
		}
	}
</script>

<style lang="scss" >
// 富文本下content中placeholder的样式穿透
/deep/ .ql-blank::before{
	font-style: normal;
	color:#e0e0e0;
}
	
.edit{
	padding:30rpx;
	.title{
		input{
			height: 120rpx;
			font-size: 46rpx;
			border-bottom:1px solid #e4e4e4;
			margin-bottom:30rpx;
			color:#000;
		}
		.placeholderClass{
			color:#e0e0e0;
		}
	}
	.content{
		.myEdit{
			height: calc(100vh - 500rpx);
			margin-bottom:30rpx;
		}		
	}
	.tools{
		width: 100%;
		height: 80rpx;
		background: #fff;
		border-top:1rpx solid #f4f4f4;
		position: fixed;
		left:0;
		bottom:0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.iconfont{
			font-size: 36rpx;
			color:#333;
			&.active{
				color:#0199FE
			}
		}
	}
}
</style>
