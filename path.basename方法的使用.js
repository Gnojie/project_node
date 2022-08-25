const path = require('path')

const fpath = 'a/b/c/index.html'
// 保留文件的拓展名
let filename = path.basename(fpath)
console.log(filename)
// 不保留文件的拓展名
let newfilename = path.basename(fpath , '.html')
console.log(newfilename)
// 获取拓展名
let extname = path.extname(fpath)
console.log(extname)