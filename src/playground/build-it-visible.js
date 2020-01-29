class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true
    }

    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Content</h1>
        <button onClick={this.toggleVisibility}>
          {(this.state.isVisible) ? 'Hide' : 'Show'} details
        </button>
        {this.state.isVisible && 
          <p>I am some text</p>
        }
      </div>
    )
  }
}

ReactDOM.render(<Content />, document.getElementById('root'))