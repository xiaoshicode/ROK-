// 自增/自减方法
const db = uniCloud.database();
const dbCmd = db.command;
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * 自定义增减
	 * @param {Object} table 数据表
	 * @param {Object} attr  属性:增加阅读量、点赞数、评论数
	 * @param {Object} id    ID
	 * @param {Object} num   1:自增 -1:自减
	 */
	async operation(table,attr,id,num){
		// let obj = {}
		return await db.collection(table).doc(id).update({
			[attr]:dbCmd.inc(num)
		})
	}
}
