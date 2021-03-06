import React, { Component } from 'react';

export default class FormDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            age: 0,
            address: ""
        }
    }

    handleChangeName = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            // name: event.target.value.toUpperCase()
            name: event.target.value.substr(0, 15)
        })
    }
    handleChangeAge = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            age: event.target.value.substr(0, 2)
        })
    }

    handleChange = event => {
        const name = event.target.name
        const value = name === "age" ? event.target.value.substr(0, 2) : (name === "name" ? event.target.value.toUpperCase() : event.target.value)
        
        // console.log([name])
        this.setState({
            [name]:value
        })
    } 

    render() {
        return <div>
            <h1>FormDemo</h1>
            <input type="text"
                style={{ fontSize: '32px', fontWeight: 'bold' }}
                value={this.state.name}
                // defaultValue="Hello"
                name="name"
                onChange={this.handleChange}
                placeholder='Enter a name' /><br></br>
            <input type="text"
                style={{ fontSize: '32px', fontWeight: 'bold' }}
                value={this.state.age}
                name="age"
                onChange={this.handleChange}
                placeholder='Enter a age' /><br></br>
            <input type="text"
                style={{ fontSize: '32px', fontWeight: 'bold' }}
                value={this.state.address}
                name="address"
                onChange={this.handleChange}
                placeholder='Enter a address' /><br></br>
        </div>;
    }
}
