class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>Option</li>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Indecision App</h1>
        <h2>Some subtitle</h2>
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
      <ol>
        <Option />
      </ol>
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