
module.exports = {
  devServer:{
    open: true,
    proxy: {
    '/3002': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite:{
            "^/3002":""
        }
    },
    '/wangyi': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        secure:false,
        pathRewrite:{
            "^/wangyi":""
        }
    }
    }
  },
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-px2rem')({ //配置项，详见官方文档
                    remUnit: 75
                }), // 换算的基数
            ]
        }
    }
},
configureWebpack: {
    resolve: {
        alias: {
            'routes': '@/routes',
            'router': '@/router',
            'components': '@/components',
            'http': '@/http',
            'pages': '@/pages',
            'store':'@/store',
            'static':'@/static',
        }
    }
}
  
}