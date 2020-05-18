function appendStyle() {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.href = 'http://127.0.0.1:5500/bot/sample.css';

  link.type = 'text/css';
  link.rel = 'stylesheet';
  head.appendChild(link);
}
