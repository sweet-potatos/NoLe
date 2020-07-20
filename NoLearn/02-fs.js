const fs = require('fs')
const { promisify } = require('util')

// 同步读取
const read_data_sync = fs.readFileSync('./state.js')
console.log(`同步读取数据为\n ${read_data_sync}`)

// 异步读取
const read_data_async = fs.readFile('./state.js', (err, data) => {
  console.log(`异步读取数据为\n ${data}`)
})

// promise封装
const read_data_promise = promisify(fs.readFile)
read_data_promise('./state.js').then(data => {
  console.log(`promise封装异步读取数据为\n ${data}`)
})

