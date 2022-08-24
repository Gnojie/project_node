// 导入fs模块
const fs = require('fs')

// 调用fs模块
// 参数1:读取文件的存放路径  
// 参数2:读取文件时的编码方式
// 参数3:回调函数
fs.readFile('1.txt','utf-8',function(err,dataStr){
    // 如果读取失败  则err不为null
    if(err){
        return console.log('读取失败'+ err.message)
    }
    else{
        return console.log('读取成功'+dataStr)
    }
})