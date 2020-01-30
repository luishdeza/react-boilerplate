import React from 'react';

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

export default AddOptionForm