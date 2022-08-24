// 导入fs模块
const fs = require('fs')
/*
    fs.writefile方法有四个参数
    参数1:必选参数 指定一个文件路径的字符串 表示文件的存放路径
    参数2:必选参数,写入的内容
    参数3:可选参数 表示以何种方式写入文件内容,默认值为utf-8
    参数4:必选参数 文件写入后的回调函数  回调函数有一个形参err
 */

fs.writeFile('1.txt','12345678',function(err){
    // 如果文件写入成功 则err的值为null
    // 如果写入失败  则err的值为一个错误对象
    console.log(err)
})