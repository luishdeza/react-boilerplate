import React from 'react';

class AddOptionForm extends React.Component {

  // Property transform
  state = {
    error: false
  }

  // constructor(props) {
  //   super(props);
    
  //   this.handleSubmit = this.handleSubmit.bind(this)

  //   this.state = {
  //     error: false
  //   }
  // }

  // handleSubmit(e) {
  handleSubmit = (e) => {
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
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input className="add-option__input" type="text" name="option" id=""/>
          <button className="button" type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOptionForm