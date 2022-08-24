// 导入fs模块
const fs = require('fs')

fs.readFile('grades.txt','utf-8',function(err,dataStr){
    // 如果读取失败  则err不为null
    if(err){
        return console.log('读取失败'+ err.message)
    }
    else{
        // 将字符串转为数组
        let arr = dataStr.trim().split(" ")
        let arr_new = []
        // foreach遍历数据替换 = 为 :
        arr.forEach(item => {
            arr_new.push(item.replace('=',':'))
        })
        for(let i =0 ;i<arr.length ;i++ ){
            fs.appendFile('grades_new.txt',arr_new[i]+'\n',function(err){
                // 如果文件写入成功 则err的值为null
                // 如果写入失败  则err的值为一个错误对象
                if(err){
                    console.log('写入失败'+err.message)
                }
                console.log('写入成功')
            })
        }   
    }
})
