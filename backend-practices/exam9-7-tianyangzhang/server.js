const express = require('express');
const app = express();

let numbers = [4, 78, 3, 678, 2, 19, 66888, 34, 66, 1, 33];


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/landing', (req, res) => {
  res.json(numbers);
})

app.get('/asc', (req, res) => {
  numbers.sort((a, b) => a - b);
  res.json(numbers);
});

app.get('/desc', (req, res) => {
  numbers.sort((a, b) => b - a);
  res.json(numbers);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
