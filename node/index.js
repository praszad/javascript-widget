const express = require('express');
const io = require('socket.io')();
const app = express();
const cors = require('cors');

app.use(cors());
app.listen(5000, () => {
  console.log('App listening on 5000');
});
io.on('connection', (socket) => {
  socket.emit('request', () => {
    console.log('Called request');
  }); // emit an event to the socket
  // io.emit('broadcast' /* … */); // emit an event to all connected sockets
  socket.on('reply', () => {
    console.log('replied here');
  }); // listen to the event
});
app.get('/', (req, res) => {
  res.send({ data: '<h1>"Ji its a text"</h1>' });
});
