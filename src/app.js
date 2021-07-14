class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer.'
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
        <Header title={ title } subtitle={ subtitle } />
        <Action />
        <Options options={ options } />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </header>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button type="button">What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          { this.props.options.map((option, index) => <Option key={ index } text={ option } /> ) }
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>{ this.props.text }</li>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="add-option" />
        <button type="submit">Add Option</button>
      </form>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));