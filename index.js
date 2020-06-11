class Counter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
            value: 0
            };
        }

    add = () => {
        this.setState({ value: this.state.value + 1});
    }

    subtract = () => {
        this.setState({ value: this.state.value - 1});
    }

    render = () => {
        return  <div>
                <button onClick={this.add}  className = "add">+</button>
                <button onClick={this.subtract} className = "subtract">-</button>
                <h1>{this.state.value}</h1>
            </div>
        
    }

}

ReactDOM.render(<Counter />, document.getElementById('root'))