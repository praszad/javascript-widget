function init_widget(params) {
  var ifrm = document.createElement('iframe');
  ifrm.setAttribute('id', 'ifrm'); // assign an id
  ifrm.setAttribute('width', '100%');
  ifrm.setAttribute('height', '400px');
  var el = document.getElementById('marker');
  el.parentNode.insertBefore(ifrm, el);
  ifrm.setAttribute('src', 'http://dev71.contus.us/services/chatbot/build/');
}

function setMarker() {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'marker');
  document.body.appendChild(newDiv);
  init_widget();
}

function createChatOperation() {
  var textBox = document.createElement('input');
  textBox.setAttribute('type', 'text');
  textBox.setAttribute('id', 'clr2323');

  textBox.onkeyup = (e) => {
    if (e.keyCode === 13) {
      const msg = e.target.value;
      handleTextMessage('user says: ' + msg);
      document.socket.emit('request', msg);
      textBox.value = '';
    }
  };
  document.body.appendChild(textBox);
}
function handleTextMessage(msg) {
  dataNode = document.getElementById('ul4545');
  var li = document.createElement('li');
  li.innerHTML = msg;
  dataNode.appendChild(li);
}

(function () {
  createButton();
  createSocketConnection();
  appendStyle();
})();
