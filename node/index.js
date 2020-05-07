const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
app.listen(5000, () => {
  console.log('App listening on 5000');
});

app.get('/', (req, res) => {
  res.send({ data: '<h1>"Ji its a text"</h1>' });
});
