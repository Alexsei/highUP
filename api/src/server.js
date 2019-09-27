const express        = require('express');
const app            = express();
const PORT           = process.env.PORT || 8000;  // порт сервера


app.listen(port, () => {
  console.log('We are live on ' + port);
});
app.get('/', (req, res) => {
  // Здесь будем создавать заметку.
  res.send('Hello')
});
