'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'This is zappsy.'
  ),
  React.createElement(
    'p',
    null,
    'This is some text.'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
