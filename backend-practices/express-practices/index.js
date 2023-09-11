const express = require('express');
const fs = require('fs');
const file = require('./singers.json');

const app = express();


// app.get('/login', (req, res) => {
//   return res.send('<h1>Login page</h1>')
// });

// app.get('/reg', (req, res) => {
//   return res.send('<h1>register page</h1>')
// });

app.get('/singer/:id', (req, res) => {
  const singerId = req.params.id; //type is number?
  let result = file.singers.find(item => {
    if(item.id === Number(singerId)){
      return true;
    }
  });

  if(!result){
    res.statusCode = 404;
    res.end(`<h1>404 Not Found</h1>`)
    return;
  }

  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h2>${result.singer_name}</h2>
    <img src='${result.singer_pic}' />
  </body>
  </html>`);
});

app.use('*', (req, res) => {res.sendStatus(404).end()});

app.listen(3000, () => {
  console.log('server listening on 3000')
})