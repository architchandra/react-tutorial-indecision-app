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

ReactDOM.render(template, appRoot);
