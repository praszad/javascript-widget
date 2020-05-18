function createSocketConnection() {
  const socketUrl =
    'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js';
  setScriptOnHead(socketUrl);
  setTimeout(() => {
    document.socket = io.connect('http://localhost:5000');
    document.socket.on('response', (msg) => {
      handleTextMessage('Bot says: ' + msg);
    });
  }, 2000);
}
function setScriptOnHead(url) {
  var c = document.head || document.getElementsByTagName('head')[0],
    n = document.createElement('script');
  (n.async = !0),
    (n.defer = !0),
    (n.type = 'text/javascript'),
    (n.src = url),
    c.appendChild(n);
}
