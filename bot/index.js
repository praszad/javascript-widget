// function init_widget(params) {
//   var ifrm = document.createElement('iframe');
//   ifrm.setAttribute('id', 'ifrm'); // assign an id
//   ifrm.setAttribute('width', '100%');
//   ifrm.setAttribute('height', '400px');
//   var el = document.getElementById('marker');
//   el.parentNode.insertBefore(ifrm, el);
//   ifrm.setAttribute('src', 'http://dev71.contus.us/services/chatbot/build/');
// }
(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams.get('config'));
})();
// (function setMarker() {
//   var newDiv = document.createElement('div');
//   newDiv.setAttribute('id', 'marker');
//   document.body.appendChild(newDiv);
//   init_widget();
// })();

// var result = init_widget();

// (function () {
//   const Widget = Object.create({
//     create(chatId) {
//       const wdg = document.createElement('div');
//       wdg.classList.add('chat-box');
//       wdg.innerHTML = `<h1>Chat: ${chatId}</h1>`;
//       // Load your chat data into UI
//       return wdg;
//     },
//   });

//   const myWidgetInstance = Widget.create('chat-12345');
//   const id = `chat-${Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1)}`;
//   document.write(`<div id="${id}"></div>`);
//   document.getElementById(id).appendChild(myWidgetInstance);
// })();
