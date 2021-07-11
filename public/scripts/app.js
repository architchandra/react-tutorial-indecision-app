'use strict';

var appData = {
  title: 'Indecision App',
  subtitle: 'Do things with clarity',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appData.title
  ),
  appData.subtitle && React.createElement(
    'p',
    null,
    appData.subtitle
  ),
  React.createElement(
    'p',
    null,
    appData.options && appData.options.length ? 'Options available: ' + appData.options.join(', ') : 'No options found.'
  )
);
var appRoot = document.getElementById('app');

var count = 0;

var plusOne = function plusOne() {
  count++;
  reRender();
};
var minusOne = function minusOne() {
  count--;
  reRender();
};
var reset = function reset() {
  count = 0;
  reRender();
};

var reRender = function reRender() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return plusOne();
        } },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return minusOne();
        } },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return reset();
        } },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};
reRender();
