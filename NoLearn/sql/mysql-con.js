const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'test',
});

connection.connect(function(err) {
  if(err) {
    return console.log('链接失败', err);
  } else {
    console.log('链接成功');
  }
})

// 增加数据库中的数据
// const add_data_key = 'insert into runoob_table (runoob_title, runoob_author) values(?,?)';
// const add_data_value = ["learn react", "runoob"];
// connection.query(add_data_key, add_data_value, (err, result) => {
//   if(err) {
//     return console.log('insert err', err);
//   } else {
//     console.log('-------------------');
//     console.log(result);
//     console.log('-------------------');
//   }
// });
// connection.end();


// 查询数据库中的数据
// const select_table = 'select * from runoob_table';
// connection.query(select_table, (err, result) => {
//   if(err) {
//     return console.log('err', err);
//   } else {
//     console.log('-------------------');
//     console.log(result);
//     console.log('-------------------');
//   }
// });
// connection.end();

// 改动数据库中的数据
// const update_key = 'update runoob_table set runoob_title = ? where id = ?';
// const update_value = ['learn Vue', '2'];
// connection.query(update_key, update_value, (err,result) => {
//   if(err) {
//     return console.log('err', err);
//   } else {
//     console.log('-------------------');
//     console.log(result);
//     console.log('-------------------');
//   }
// })
// connection.end();

// 删除数据库中的数据
const delete_key = 'delete from runoob_table where id = ?';
const delete_id = ['2'];
connection.query(delete_key, delete_id, (err,result) => {
  if(err) {
    return console.log('err', err);
  } else {
    console.log('-------------------');
    console.log(result);
    console.log('-------------------');
  }
})
connection.end();