'use strict';

var appData = {
  title: 'Indecision App',
  subtitle: 'Do things with clarity',
  options: [],
  decision: null
};

var onClickRemove = function onClickRemove() {
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

var onMakeDecision = function onMakeDecision() {
  var randNum = Math.floor(Math.random() * appData.options.length);
  console.log(randNum);
  appData.decision = randNum;
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
      'button',
      { type: 'button', disabled: appData.options.length === 0, onClick: onClickRemove },
      'Remove All'
    ),
    React.createElement(
      'button',
      { type: 'button', disabled: appData.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    appData.options.length !== 0 && appData.decision !== null ? React.createElement(
      'p',
      null,
      'Do ',
      appData.options[appData.decision]
    ) : '',
    React.createElement(
      'ol',
      null,
      appData.options.map(function (option, i) {
        return React.createElement(
          'li',
          { key: i },
          option
        );
      })
    ),
    appData.options && !appData.options.length ? React.createElement(
      'p',
      null,
      'No options found.'
    ) : '',
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
reRender();
