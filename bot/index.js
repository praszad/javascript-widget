function init_widget(params) {
  var ifrm = document.createElement('iframe');
  ifrm.setAttribute('id', 'ifrm'); // assign an id
  ifrm.setAttribute('width', '100%');
  ifrm.setAttribute('height', '400px');
  var el = document.getElementById('marker');
  el.parentNode.insertBefore(ifrm, el);
  ifrm.setAttribute('src', 'http://dev71.contus.us/services/chatbot/build/');
}
function appDetails() {
  console.log(navigator);
  var ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
    if (tem != null)
      return tem
        .slice(1)
        .join(' ')
        .replace('OPR', 'Opera')
        .replace('Edg ', 'Edge ');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' ');
}
function callBrowserDetails() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = nAgt.indexOf('Opera')) != -1) {
    browserName = 'Opera';
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
    browserName = 'Microsoft Internet Explorer';
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
    browserName = 'Chrome';
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
    browserName = 'Safari';
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
    browserName = 'Firefox';
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if (
    (nameOffset = nAgt.lastIndexOf(' ') + 1) <
    (verOffset = nAgt.lastIndexOf('/'))
  ) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(';')) != -1)
    fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(' ')) != -1)
    fullVersion = fullVersion.substring(0, ix);

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }
  return {
    browserName,
    majorVersion,
    fullVersion,
    appName: navigator.appName,
    userAgent: navigator.userAgent,
  };
}

function setMarker() {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'marker');
  document.body.appendChild(newDiv);
  init_widget();
}
(function createButton() {
  createSocketIo(document);
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
})();
function createChatOperation() {
  var textBox = document.createElement('input');
  textBox.setAttribute('type', 'text');
  textBox.setAttribute('id', 'clr2323');

  textBox.onkeyup = (e) => {
    if (e.keyCode === 13) {
      dataNode = document.getElementById('ul4545');
      var li = document.createElement('li');
      li.innerHTML = e.target.value;
      dataNode.appendChild(li);
      textBox.value = '';
      // document.body.appendChild(e.target.value);
    }
  };
  document.body.appendChild(textBox);
}
function createSocketIo(e = document) {
  var c = e.head || e.getElementsByTagName('head')[0],
    n = e.createElement('script');
  (n.async = !0),
    (n.defer = !0),
    (n.type = 'text/javascript'),
    (n.src = 'http://localhost:5000'),
    c.appendChild(n);
  console.log(n);
}
