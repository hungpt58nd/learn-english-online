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

app.post('/api/register', (req, res)=>{
  // ket noi server, tao
  res.send({status: "success"});

  res.send({
    status: "fail",
    message: "......"
  });
})

app.post('/api/login', (req, res)=>{
  // ket noi server, dang nhap
  res.send({
    status: "success",
    data: {
      a: 1
    }
  });

  res.send({
    status: "fail",
    message: "......"
  });
})

app.get('/api/levels', (req, res)=>{
  // get level
  res.send({
    status: "success",
    data : [
      {
        id: 1,
        title: 1,
        description: 1,
        lessons: []
      }
    ]
  });

  res.send({
    status: "fail",
    message: "......"
  });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})