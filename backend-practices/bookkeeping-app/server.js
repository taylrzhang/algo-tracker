const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const controller = require('./controller.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());

app.get('/account/create', (req, res) => res.sendFile(__dirname + '/public/create.html'))

app.post('/account/create', controller.add, (req,res) => {
  res.status(200).json(res.locals.newData)
  console.log('Handling POST /account/create');
  
})

app.delete('/account/remove/:itemId', controller.delete);

app.use('/account', express.static(__dirname + '/public'));


app.use('*', (req, res) => {res.sendStatus(404).end()});

app.listen(3000, () => {
  console.log('server listening on 3000')
})