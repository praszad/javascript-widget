const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const server = app.listen(5000, () => {
  console.log('App listening on 5000');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  // emit an event to the socket
  // io.emit('broadcast' /* … */); // emit an event to all connected sockets
  socket.on('request', (msg) => {
    const messages = ['hi', 'hello', 'Silver', 'sha', 'random', 'strings'];
    const data =
      msg <= messages.length
        ? messages[msg]
          ? messages[msg]
          : 'Sorry'
        : "Sorry i couldn't understand";
    console.log(data);

    socket.emit('response', data);
  }); // listen to the event
});
app.get('/', (req, res) => {
  res.send({ data: '<h1>"Ji its a text"</h1>' });
});
