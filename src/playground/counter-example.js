class Counter extends React.Component { 
    constructor(props) {
        super(props)

        this.handlePlus1 = this.handlePlus1.bind(this);
        this.handleMinus1 = this.handleMinus1.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)
        if(count) {
            this.setState(() => ({ count }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){

            localStorage.setItem('count', this.state.count)
        }
    }

    handlePlus1() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinus1() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                 count: 0
            }
        });
    }


    render() {        
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleMinus1}>-1</button>
                <button onClick={this.handlePlus1}>+1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 1
}

ReactDOM.render(<Counter />, document.getElementById('root'))