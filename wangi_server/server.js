let Koa = require('koa');
let KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

router.get('/', (ctx, next) => {
	ctx.body = '123'
})

// 主页数据
let indexData =  require('./datas/index.json');
router.get('/getIndexData', (ctx, next) => {
	ctx.body = indexData
	
});
//导航数据
let indexCateModule =  require('./datas/indexCateModule.json');
router.get('/getNavData', (ctx, next) => {
	ctx.body = indexCateModule
	
});

//导航对应的页面数据
let  indexCateList=  require('./datas/indexCateList.json');
router.get('/getNavCateListData', (ctx, next) => {
	ctx.body = indexCateList
	
});

//分类页面左侧导航数据
let  cateNavDatas=  require('./datas/cateNavDatas.json');
router.get('/getCateNavDatas', (ctx, next) => {
	ctx.body = cateNavDatas
	
});
//分类页面右侧内容数据
let  cateLists=  require('./datas/cateLists.json');
router.get('/getCateLists', (ctx, next) => {
	ctx.body = cateLists
	
});
//值得买页面导航数据






// // 主页导航页面数据
// let indexCateList = require('./datas/cateList.json')
// router.get('/getindexCateList', async (ctx, next) => {
// 	// 生成的H5应用存在跨域问题，通过CORS设置跨域配置
// 	ctx.set('Access-Control-Allow-Origin', '*')
// 	await new Promise(resolve => setTimeout(() => resolve(),2000))
// 	ctx.body = indexCateList;
// });




// // 分类页面数据 
// let cateGoryData = require('./datas/categoryDatas.json');
// router.get('/getCateGoryData', async (ctx, next) => {
// 	ctx.body = {
// 		code: 0,
// 		data: cateGoryData
// 	};
// });




app
	.use(router.routes())
	.use(router.allowedMethods())
	
	
app.listen('3002', () => {
	console.log('服务器启动');
	console.log('服务器地址： http://localhost:3002')
})