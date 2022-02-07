import React, { Component } from 'react';

export default class TestDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
        this.textInput = React.createRef()
    }

    componentDidMount() {
        console.log(this.textInput.current)
        this.textInput.current.focus()
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            name: this.textInput.current.value
        })
    }

    render() {
        return <div>
            <h1>UnControllered Component</h1>
            {/* <form>
                Name:<input type="text" placeholder="Enter a Name" /><br></br>
                Password:<input type="password" placeholder='Enter a Password' /><br></br>
                Address:<input type="text" placeholder="Enter a Address" ref={this.textInput} />
            </form> */}
            <form onSubmit={this.handleSubmit}>
                Name:<input type="text" placeholder="Enter a Name" ref={this.textInput} /><br></br>
                <input type="submit" />
            </form>
            
            <h1>Name:{this.state.name}</h1>
        </div>;
    }
}
