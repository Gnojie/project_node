const path = require('path')

// ../会抵消路径
const pathstr = path.join('/a','/a/b','../../','./d','e')
console.log(pathstr)