// 导入http模块
const http = require('http')
// 创建web服务器实例 http.creatServer 创建
const server = http.createServer()
// 为服务器绑定request事件,监听客户端请求
server.on('request',function(req,res){
    // req请求对象  与客户端相关的数据或属性
    console.log('有人访问了我们的服务器');
})
// 启动服务器  
server.listen(8080,function(){
    console.log('服务器启动成功')
})