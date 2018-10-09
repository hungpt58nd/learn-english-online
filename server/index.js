const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//create application/x-www-form-urlencoded parser // default true
app.use(bodyParser.urlencoded({ extended: false })); // => value only string or array
app.use(bodyParser.json()); // => cho truy cap req.body
/**allow other ip access */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  next();
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'learnEnglishOnline'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
 
// connection.end(function(err) {
//   // The connection is terminated now
//   connection.destroy();
// });

app.post('/api/register', (req, res)=>{
  // ket noi server, tao
  let post = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  let sql = "INSERT INTO user SET ?";
  connection.query(sql, post, function (error, results, fields) {
    if (error) {
      return res.send({
        status: "fail",
        message: "Tài khoản đã tồn tại"
      });
    }
    return res.send({
      status: "success",
      data: results
    });
  });
})

app.post('/api/login', (req, res)=>{
  // ket noi server, dang nhap
  let email = req.body.email;
  let password = req.body.password;
  let sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], function (err, results) {
    if (err || results.length == 0) {
      return res.send({
        status: "fail",
        message: "Email hoặc mật khẩu bị sai"
      });
    }
    return res.send({
      status: "success",
      // results ở đây là mảng
      data: results
    });
  });
})

app.get('/api/levels', (req, res)=>{
  // get level
  let sql = 'SELECT * FROM level';
  connection.query(sql, function (err, results) {
    if (err) {
      return res.send({
        status: "fail",
        message: "Lỗi server"
      });
    }
    let data = results;
    for (let index = 0; index < data.length; index++) {
      let element = data[index];
      let sub_sql = 'SELECT * FROM lesion WHERE lession_id = ?';
      connection.query(sql, element.id, function (sub_err, sub_results) {
        if (sub_err) {
          return res.send({
            status: "fail",
            message: "Lỗi server"
          });
        }
        console.log(sub_results)
        data[index].lessons = sub_results;
      });
    }
    return res.send({
      status: "success",
      data: data
    });
  });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})