const ReactDOM = require('react-dom');

window.io = require('socket.io-client');

document.addEventListener('DOMContentLoaded', function init() {
  // do your setup here
  const App = document.getElementById('app');
  const dashboard = require('dashboard');

  ReactDOM.render(dashboard, App);
});
