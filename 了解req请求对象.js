// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器绑定request事件,监听客户端请求
server.on('request', (req) => {
    // req请求对象  与客户端相关的数据或属性
    // req.url 是客户端请求的url地址
    // req.method是客户端请求的 method类型
    const url = req.url
    const method = req.method
    const str = `your url is ${url} and your method is ${method}`
    console.log(str);
})
// 启动服务器  
server.listen(8080, function () {
    console.log('服务器启动成功')
})
