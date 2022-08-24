const fs = require('fs')

fs.readFile('1.txt','utf-8',function(err,datastr){
    if(err){
        return console.log('读取失败')
    }
    return console.log('读取成功:'+datastr)
})