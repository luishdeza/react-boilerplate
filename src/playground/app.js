import React from 'react';


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer",
      options: []
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this)
  }

  componentDidMount() {
    try { // Prevent invalid json formats
      const jsonData = localStorage.getItem('options');
      const options = JSON.parse(jsonData);

      if (options){
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // pass
    } 
    
  }

  componentDidUpdate(prevProps, prevState) {
    // Access to this.props and this.state allowed
    
    if (prevState.options.length !== this.state.options.length) {
      const jsonData = JSON.stringify(this.state.options);
      localStorage.setItem('options', jsonData);
    }
  }

  componentWillMount() {
    console.log("Component will mount");    
  }

  componentWillUnmount() {
    console.log("Component will unmount");    
  }

  handlePick() {
    const rndNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rndNumber]
    alert(option)
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Duplicated options are not allowed'
    }

    // this.setState((prevState) => {
    //   return {
    //     options: [...prevState.options, option]
    //   }
    // })
    this.setState((prevState) => ({
      options: [...prevState.options, option] 
    }));
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // })
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((value) => value != optionToRemove)
    }))
  }

  render() {
    return (
      <div>
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle}
        />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOptionSingular={this.handleDeleteOptionSingular}
        />
        <AddOptionForm 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}
Header.defaultProps = {
  title: 'Default title'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Option = (props) => {
  return (
    <li>
      {props.optionText}
      <button 
        onClick={() => {
          props.handleDeleteOptionSingular(props.optionText)
        }}
      >
        Remove
      </button>
    </li>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length == 0 && <p>Please add an option</p>}
      <ul>
        {
        props.options.map((value, index) => 
          <Option 
            key={index} 
            optionText={value} 
            handleDeleteOptionSingular={props.handleDeleteOptionSingular}
          />
        )
        }
      </ul>
    </div>
  )
}


class AddOptionForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      error: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const newOption = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(newOption)

    if(!error){
      e.target.elements.option.value = ""
    }

    this.setState(() => {
      return { error }
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <span>{this.state.error}</span>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" id=""/>
          <button type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'))