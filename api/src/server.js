const express        = require('express');
const app            = express();
const passport       = require('passport');
const session        = require('express-session');

const PORT           = process.env.PORT || 9001;  // порт сервера
//const db             = require('./db');
app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});
app.get('/', (req, res) => {
  // Здесь будем создавать заметку.
  res.send('Hello')
});

app.get('/api/login', (req, res) => {
  // Здесь будем создавать заметку.
  res.send('Hello2')
});