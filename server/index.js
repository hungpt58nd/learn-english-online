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
  connection.query(sql, post, function (err, results, fields) {
    if (err) {
      return res.send({
        status: "fail",
        message: "Tài khoản đã tồn tại"
      });
    }
    let sub_sql = 'SELECT * FROM user WHERE id = ?'
    connection.query(sub_sql, [results.insertId], function (err, sub_results) {
      return res.send({
        status: "success",
        data: sub_results[0]
      });
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
    let data = {
      id: results[0].id,
      username: results[0].username,
      email: results[0].email,
      password: results[0].password,
      lessions: results[0].lessions
    }
    if (results[0].lessions != null){
      data.lessions= results[0].lessions.split(",");
    }
    return res.send({
      status: "success",
      data: data
    });
  });
})

app.post('/api/editUser', (req, res)=>{
  let r = req.body;
  let post = [r.username, r.email, r.password, r.oldId, r.oldUsername, r.oldEmail, r.oldPassword];
  let sql = `UPDATE user SET username = ?, email = ?, password = ? 
              WHERE id = ? AND username = ? AND email = ? AND password = ?`;  
  connection.query(sql, post, function (err, results) {
    if (err) {
      return res.send({
        status: "fail",
        message: "Error"
      });
    }
    let sub_sql = 'SELECT * FROM user WHERE id = ?'
    connection.query(sub_sql, [r.oldId], function (err, sub_results) {
      let data = {
        id: sub_results[0].id,
        username: sub_results[0].username,
        email: sub_results[0].email,
        password: sub_results[0].password,
        lessions: sub_results[0].lessions
      }
      if (sub_results[0].lessions != null){
        data.lessions= sub_results[0].lessions.split(",");
      }
      return res.send({
        status: "success",
        data: data
      });
    });
  });
})

app.get('/api/levels', (req, res)=>{
  // get level
  let sql = `SELECT level.id as id, level.title, description, lession.id as lession_id,
    lession.title as lession_title, imageLink FROM level LEFT JOIN lession ON level_id = level.id ORDER BY level.id`;
  connection.query(sql, function (err, results) {
    if (err || !results) {
      return res.send({
        status: "fail",
        message: "Lỗi server"
      });
    }
    let data = [];
    let countIndex = -1;
    let curId = -1;
    for (let index = 0; index < results.length; index++) {
      if (curId != results[index].id){
        countIndex++;
        curId = results[index].id;
        data.push({
          level: results[index].id,
          title: results[index].title,
          description: results[index].description,
          lessonList: [{
            id: results[index].lession_id,
            title: results[index].lession_title,
            imageLink: results[index].imageLink
          }]
        })
      } else{
        data[countIndex].lessonList.push({
          id: results[index].lession_id,
          title: results[index].lession_title,
          imageLink: results[index].imageLink
        })
      }
    }
    return res.send({
      status: "success",
      data: data
    });
  });
})

app.post('/api/lession', (req, res)=>{
  // get exercise in lession
  let sql = 'SELECT title, description, type, rightAnswer, answers FROM exercise WHERE lession_id = ?';
  connection.query(sql, [req.body.lession_id], function (err, results) {
    if (err || !results) {
      return res.send({
        status: "fail",
        message: "Lỗi server"
      });
    }
    for (let index = 0; index < results.length; index++) {
      if(results[index].type == 1){
        results[index].answers = JSON.parse(results[index].answers);
      }
      if(results[index].type == 2){
        results[index].answers = results[index].answers.split(",");
      }
      if(results[index].type == 3){
        results[index].answers = JSON.parse(results[index].answers);
      }
      if(results[index].type == 4){
        results[index].answers = JSON.parse(results[index].answers);
      }
    }
    return res.send({
      status: "success",
      data: results
    });
  });
})

app.post('/api/user_lessions', (req, res)=>{
  // push lession done
  let sql = 'SELECT lession FROM user WHERE id = ?';
  connection.query(sql, [req.body.user_id], function (err, results) {
    if (err || !results) {
      return res.send({
        status: "fail",
        message: "Lỗi server"
      });
    }
    let lessions = results[0].lessions;
    lessions += ',' + req.body.lession_id;
    let sub_sql = 'UPDATE user SET lessions = ? WHERE id = ?';
    connection.query(sub_sql, [lessions, req.body.user_id], function (err, results) {
      if (err || !results) {
        return res.send({
          status: "fail",
          message: "Lỗi server"
        });
      }
      return res.send({
        status: "success"
      });
    });
  });
})

app.get('/api/user/:id', (req, res) => {
  // ket noi server, dang nhap
  let userId = req.params.id;

  let sql = 'SELECT * FROM user WHERE id = ?';
  connection.query(sql, [userId], function (err, results) {
    if (err || results.length == 0) {
      res.send({
        status: "fail",
        message: "Error"
      });
    }
    let data = {
      id: results[0].id,
      username: results[0].username,
      email: results[0].email,
      password: results[0].password,
      lessions: results[0].lessions,
      right: results[0].rights,
      wrong: results[0].wrong
    }
    if (!results[0].lessions){
      data.lessions= results[0].lessions.split(",");
    }
    return res.send({
      status: "success",
      data: data
    });
  });
})

app.post('/api/user/lesson/learn', (req, res) => {
  let userId = req.body.userId;
  let lessonId = req.body.lessonId;
  let sql = 'SELECT * FROM user WHERE id = ?';
  connection.query(sql, [userId], function (err, results) {
    if (err || results.length == 0) {
      res.send({
        status: "fail",
        message: "Error"
      });
    }
    let data = {
      id: results[0].id,
      username: results[0].username,
      email: results[0].email,
      password: results[0].password,
      lessions: results[0].lessions
    }
    if (!results[0].lessions.split(',').includes(lessonId.toString())){
      data.lessions = data.lessions + ',' + lessonId;
    }
    updateLesson(userId, data.lessions);
    res.send({
      status: "success"
    });
  });
})

app.post('/api/user/right', (req, res) => {
   let sql = 'UPDATE user SET rights = ? where id = ?';
   connection.query(sql, [req.body.right, Number(req.body.userId)], function (err, results) {
     if(err){
       console.log(err.toString())
     }
     res.send({status: "sucess"})
   })
})

app.post('/api/user/wrong', (req, res) => {
  let sql = 'UPDATE user SET wrong = ? where id = ?';
  connection.query(sql, [req.body.wrong, Number(req.body.userId)], function (err, results) {
    if(err){
      console.log('error')
    }
    res.send({status: "sucess"})
  })
})

updateLesson = (userId, lessons) => {
  let sql = 'UPDATE user SET lessions = ? where id = ?';
  connection.query(sql, [lessons, userId], function (err, results) {
  });
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
