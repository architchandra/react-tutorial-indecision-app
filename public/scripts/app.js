'use strict';

var appData = {
  title: 'Indecision App',
  subtitle: 'Do things with clarity',
  options: []
};

var onClickRemove = function onClickRemove(e) {
  e.preventDefault();
  appData.options = [];
  reRender();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  appData.options.push(option);
  e.target.elements.option.value = '';
  reRender();
};

var appRoot = document.getElementById('app');

var reRender = function reRender() {
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
    ),
    React.createElement(
      'button',
      { onClick: onClickRemove },
      'Remove All'
    ),
    React.createElement(
      'p',
      null,
      appData.options.length
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' })
    )
  );
  ReactDOM.render(template, appRoot);
};
reRender();
