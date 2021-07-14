class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
    };
  }
  
  handlePlusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: { this.state.count }</h1>
        <button type="button" onClick={ this.handlePlusOne }>+1</button>
        <button type="button" onClick={ this.handleMinusOne }>-1</button>
        <button type="button" onClick={ this.handleReset }>Reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));





















// let count = 0;

// const plusOne = () => {
//   count++;
//   reRender();
// };
// const minusOne = () => {
//   count--;
//   reRender();
// };
// const reset = () => {
//   count = 0;
//   reRender();
// };

// const reRender = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: { count }</h1>
//       <button onClick={ () => plusOne() }>+1</button>
//       <button onClick={ () => minusOne() }>-1</button>
//       <button onClick={ () => reset() }>Reset</button>
//     </div>
//   );
  
//   ReactDOM.render(templateTwo, appRoot);
// };
// reRender();