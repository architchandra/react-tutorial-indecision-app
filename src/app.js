const appData = {
  title: 'Indecision App',
  subtitle: 'Do things with clarity',
  options: [],
};

const onClickRemove = (e) => {
  e.preventDefault();
  appData.options = [];
  reRender();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  appData.options.push(option);
  e.target.elements.option.value = '';
  reRender();
};

const appRoot = document.getElementById('app');

const reRender = () => {
  const template = (
    <div>
      <h1>{ appData.title }</h1>
      { appData.subtitle && <p>{appData.subtitle}</p> }
      <p>
        { appData.options && appData.options.length ? 'Options available: ' + appData.options.join(', ') : 'No options found.' }
      </p>
      <button onClick={ onClickRemove }>Remove All</button>
      <p>{ appData.options.length }</p>
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option" />
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
reRender();