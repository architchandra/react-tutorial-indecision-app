class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleChooseOption = this.handleChooseOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: [],
      selectedOption: '',
    };
  }
  
  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
    }));
  }

  handleChooseOption() {
    this.setState(() => ({
      selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)],
    }));
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid option.';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }
    
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }
  
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer.'

    return (
      <div>
        <Header title={ title } subtitle={ subtitle } />
        <Action
          hasOptions={ this.state.options.length > 0 }
          selectedOption={ this.state.selectedOption }
          handleChooseOption={ this.handleChooseOption }
        />
        <Options
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
        />
        <AddOption
          handleAddOption={ this.handleAddOption }
        />
      </div>
    );
  }
}

const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    <h2>{ props.subtitle }</h2>
  </header>
);

const Action = (props) => (
  <div>
    <button
      type="button"
      disabled={ !props.hasOptions }
      onClick={ props.handleChooseOption }
    >
      What should I do?
    </button>
    { !!props.selectedOption && <p>{ props.selectedOption }</p> }
  </div>
);

const Options = (props) => (
  <div>
    <ol>
      { props.options.map((option, index) => <Option key={ index } text={ option } /> ) }
    </ol>
    <button type="button" onClick={ props.handleDeleteOptions }>Remove all options</button>
  </div>
);

const Option = (props) => (
  <li>{ props.text }</li>
);

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined,
    };
  }
  
  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error,
    }));

    e.target.elements.option.value = '';
  }
  
  render() {
    return (
      <div>
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));