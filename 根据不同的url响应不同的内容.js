// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器绑定request事件,监听客户端请求
server.on('request', (req,res) => {
    // req请求对象  与客户端相关的数据或属性
    // req.url 是客户端请求的url地址
    // req.method是客户端请求的 method类型  浏览器默认只能发出get请求
    const url = req.url
    const method = req.method
    const str = `your url is ${url} and your method is ${method}`
    console.log(str);
    // 调用res.end方法向客户端响应一些内容  发送中文时会乱码  需手动设置编码格式
    res.setHeader('Content-Type','text/html ; charset= utf-8')
    if(url === '/index.html'){
        res.end('我爱你')
    }
    
})
 
// 启动服务器  
server.listen(8080, function () {
    console.log('服务器启动成功')
})
