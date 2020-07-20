const fs = require('fs');
const path = require('path');
const readline = require('readline');

const file_path = path.resolve(__dirname, 'db.json')

// 查询数据
function searchData(key) {
  fs.readFile(file_path, (err, data_buffer) => {
    if(err) {
      return console.log(err);
    }
    const data_str = data_buffer.toString();
    const json = JSON.parse(data_str);
    console.log(json[key]);
  })
}

// 添加、修改数据
function addModData(key, value) {
  fs.readFile(file_path, (err, data_buffer) => {
    if(err) {
      return console.log(err);
    }
    const data_str = data_buffer.toString();
    console.log('setData', data_str);

    const json = data_str ? JSON.parse(data_str) : {};  // 空文件设置成空对象
    json[key] = value;

    console.log('json', json);

    fs.writeFile(file_path, JSON.stringify(json), error => {
      console.log('json---->', JSON.stringify(json));
      if(error) {
        console.log(error);
      }
      console.log('写入成功')
    })
  })
}

// 删除数据
function deleteData(key) {
  fs.readFile(file_path, (err, data_buffer) => {
    if(err) {
      return console.log(err);
    }
    const data_str = data_buffer.toString();
    console.log('setData', data_str);

    const json = data_str ? JSON.parse(data_str) : {};  // 空文件设置成空对象
    const isHaveKey = json.hasOwnProperty(key);
    console.log('json', json);
    if(isHaveKey) {
      delete json[key];
    } else {
      return console.log('没有该属性')
    }

    fs.writeFile(file_path, JSON.stringify(json), error => {
      console.log('重新写入的json的数据', JSON.stringify(json));
      if(error) {
        console.log(error);
      }
      console.log('写入成功')
    })
  })
}

// 命令行接口部分
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(input){
  const [op, key, value] = input.split(" ");
  switch (op) {
    case 'getData':
      searchData(key);
      break;
    case 'setData':
      addModData(key, value);
      break;
    case 'deleteData':
      deleteData(key);
      break;
    case 'quit':
      rl.close();
      break;
    default:
      console.log('没有该操作');
      break;
  }
})

rl.on("close", function(){
  console.log('操作结束');
  process.exit(0);
})