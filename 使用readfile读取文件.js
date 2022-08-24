// 导入fs模块
const fs = require('fs')

// 调用fs模块
// 参数1:读取文件的存放路径  
// 参数2:读取文件时的编码方式
// 参数3:回调函数
fs.readFile('1.txt','utf-8',function(err,dataStr){
    // err是读取失败的结果  如果读取成功err的值为null
    // 如果读取失败 则err的值为错误对象  dataStr的值为undefined
    console.log(err);
    // dataStr是读取成功的结果
    console.log(dataStr);
})