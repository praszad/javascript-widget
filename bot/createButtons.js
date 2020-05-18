function createButton() {
  var btn = document.createElement('button');
  btn.setAttribute('class', 'my-iframe-btn');
  btn.setAttribute('value', 'Click Me');
  var btnIframe = document.createElement('button');
  btnIframe.setAttribute('class', 'my-iframe-btnIframe');
  btnIframe.setAttribute('value', 'Click Me');
  var ul = document.createElement('ul');
  ul.setAttribute('id', 'ul4545');
  document.body.appendChild(ul);
  btn.onclick = () => createChatOperation();
  btnIframe.onclick = () => setMarker();
  btn.innerHTML = 'Show Chat Bot Text Box';
  btnIframe.innerHTML = 'Show Chat Bot Iframe';
  document.body.appendChild(btn);
  document.body.appendChild(btnIframe);
}
