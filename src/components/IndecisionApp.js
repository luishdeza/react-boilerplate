import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptionForm from './AddOptionForm';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    title: "Indecision",
    subtitle: "Put your life in the hands of a computer",
    options: [],
    selectedOption: ""
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "Indecision",
  //     subtitle: "Put your life in the hands of a computer",
  //     options: []
  //   }

  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this)
  // }

  handlePick = () => {
    const rndNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rndNumber]
    this.setState(() => ({ 
      selectedOption: option 
    }))
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter a valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Duplicated options are not allowed'
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option] 
    }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteOptionSingular = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((value) => value != optionToRemove)
    }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: ""
    }))
  }

  // Check react component's live cycle
  componentDidMount() {
    try { // Prevent invalid json formats
      const jsonData = localStorage.getItem('options');
      const options = JSON.parse(jsonData);

      if (options){
        this.setState(() => ({ options }))
      }
    } catch (e) {} 
  }

  componentDidUpdate(prevProps, prevState) {
    // Access to this.props and this.state allowed
    
    if (prevState.options.length !== this.state.options.length) {
      const jsonData = JSON.stringify(this.state.options);
      localStorage.setItem('options', jsonData);
    }
  }

  render() {
    return (
      <div>
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle}
        />
        <div className="container">
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
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}

export default IndecisionApp