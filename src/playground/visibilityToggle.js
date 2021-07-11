const appRoot = document.getElementById('app');
let app = {
  isHidden: true,
  details: 'Some details',
};

const onShowdetails = () => {
  app.isHidden = !app.isHidden;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={ onShowdetails }>Show details</button>
      { !app.isHidden && <p>{ app.details }</p> }
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();