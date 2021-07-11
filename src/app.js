const appData = {
  title: 'Indecision App',
  subtitle: 'Do things with clarity',
  options: ['One', 'Two'],
};

const template = (
  <div>
    <h1>{ appData.title }</h1>
    { appData.subtitle && <p>{appData.subtitle}</p> }
    <p>{ appData.options && appData.options.length ? 'Options available: ' + appData.options.join(', ') : 'No options found.' }</p>
  </div>
);
const appRoot = document.getElementById('app');