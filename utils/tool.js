// 获取富文本内的图片url地址
export function getImgSrc(richtext,num=3){
	let imgList = [];
	richtext.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g,(match,capture) =>{
		imgList.push(capture);
	});
	imgList=imgList.slice(0,num) 
	return imgList;
}
//向外导出省市
// 下面代码逻辑：第一次的时候走网络请求，后面有缓存直接走缓存，然后读取缓存，如果缓存超过一小时就重新请求网络，这样可以减轻服务器的压力
export function getProvince(){
	return new Promise((resolve,reject)=>{
		let historyProvince=uni.getStorageSync("historyProvince");
		if(historyProvince){			
			if((Date.now() - historyProvince.time) > 1000*60*60){				
				getIp().then(res=>{
					resolve(res)
				}).catch(err=>{
					reject(err)
				})	
			}else{				
				resolve(historyProvince.province);
			}
		}else{			
			getIp().then(res=>{
				resolve(res)
			}).catch(err=>{
				reject(err)
			})		
		}	
	})
}
//获取所在省市
// 封装网络请求时间范围内不重复请求，减轻服务器压力
function getIp(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"https://restapi.amap.com/v3/ip?key=fefeb5b5bbf77627e778435178b00ee5",
			success:res=>{	
				// 网络请求 因为高德地图api IP地址只能获取到国内，所以这里做一下判断，如果IP地址获取为空，则显示为国外
				let str=""				
				typeof(res.data.province) == "string" ? str=res.data.province :str="国外"
				resolve(str)
				let obj={
					province:str,
					time:Date.now()
				}
				uni.setStorageSync("historyProvince",obj);				
			},
			fail:err=>{
				reject(err)
			}
		})
	})	
}

// 获取昵称
export function giveName(item){
	return item.user_id[0].nickname || item.user_id[0].username || item.user_id[0].mobile || "请设置昵称"
}

// 获取默认头像
export function giveDefaultAvatar(item){
	return item.user_id[0]?.avatar_file?.url ?? '../../static/images/user-default.jpg' //空值赋值写法 这句代码的意思是：查询item下user_id下标为0的数组中，有没有avatar_file这个属性，如果有则接着查询item.user_id[0].avatar_file下有没有url这个属性，如果没有，则用后面单引号包裹的默认图，如果有，则使用item.user_id[0].avatar_file.url这张图
}

const db = uniCloud.database()
const utilsObj = uniCloud.importObject("utilsObj",{
	customUI:true // 取消自动展示的交互提示页面
})
// 点赞操作数据库的方法
export async function likeFun(artid){
	// 点赞前查询当前用户在这篇文章是否点过赞
	let count = await db.collection("quanzi_like").where(`article_id=="${artid}" && user_id == $cloudEnv_uid`).count();
	// 如果点过赞，在quanzi_like这张表里将用户点赞信息删除
	if(count.result.total){
		db.collection("quanzi_like").where(`article_id=="${artid}" && user_id == $cloudEnv_uid`).remove();
		utilsObj.operation("quanzi_article","like_count",artid,-1)
	}
	// 如果没点过赞，将用户点赞信息增加在quanzi_like这张表里
	else{
		db.collection("quanzi_like").add({
			article_id:artid
		})
		utilsObj.operation("quanzi_article","like_count",artid,1)
	}
}
