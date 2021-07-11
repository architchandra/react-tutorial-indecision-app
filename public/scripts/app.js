'use strict';

var appRoot = document.getElementById('app');
var app = {
  isHidden: true,
  details: 'Some details'
};

var onShowdetails = function onShowdetails() {
  app.isHidden = !app.isHidden;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onShowdetails },
      'Show details'
    ),
    !app.isHidden && React.createElement(
      'p',
      null,
      app.details
    )
  );
  ReactDOM.render(template, appRoot);
};
render();
