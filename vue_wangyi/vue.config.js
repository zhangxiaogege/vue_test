
module.exports = {
  devServer:{
    open: true,
    proxy: 'http://localhost:3002'
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
            'store':'@/store'
        }
    }
}
  
}