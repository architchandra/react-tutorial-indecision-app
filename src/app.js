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

let count = 0;

const plusOne = () => {
  count++;
  reRender();
};
const minusOne = () => {
  count--;
  reRender();
};
const reset = () => {
  count = 0;
  reRender();
};

const reRender = () => {
  const templateTwo = (
    <div>
      <h1>Count: { count }</h1>
      <button onClick={ () => plusOne() }>+1</button>
      <button onClick={ () => minusOne() }>-1</button>
      <button onClick={ () => reset() }>Reset</button>
    </div>
  );
  
  ReactDOM.render(templateTwo, appRoot);
};
reRender();