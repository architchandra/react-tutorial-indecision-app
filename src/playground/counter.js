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