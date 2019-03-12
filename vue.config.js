const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
    // 部署生产环境和开发环境下的URL
    baseUrl: process.env.NODE_ENV === 'production' ?
        '/production-sub-path/' : '/',
    //相當于src目錄 可以直接使用@代表src 目錄 
    chainWebpack: confing => {
        confing.resolve.alias
            .set('@', resolve('src'))
    },
    // 打包時不生成.map文件  可以減少打包体积 同時加快打包速度
    productionSourceMap: false,
    // 配置跨域
    devServer: {
        // 配置一个代理
        // proxy: 'http://localhost:4000',
        // 配置多个代理
        // '/v1': {
        //     target: 'https://192.168.1.94:8443/kunlun-package-control',
        //     ws: true,
        //     changeOrigin: true,
        //     pathRewrite: {
        //         '^/v1': '/v1'
        //     }
        // },
        // '/rest': {
        //     target: 'https://192.168.1.94:8443/kunlun-package-control',
        //     ws: true,
        //     changeOrigin: true,
        //     pathRewrite: {
        //         '^/rest': '/'
        //     }
        // },
    }
}