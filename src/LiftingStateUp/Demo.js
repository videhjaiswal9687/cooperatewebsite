import React, { Component } from 'react';
import Guest from './Guest';
import User from './User';

export default class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Rahul Sharma"
        }
        this.handleName = this.handleName.bind(this)
    }

    handleName(getName) {
        this.setState({
            name: getName
        })
    }

    render() {
        return <div>
            <h1>Demo Component</h1>
            <h1>Name:{this.state.name}</h1>
            <User name={this.state.name} 
            demoParent={this.handleName}
            />
            <Guest guestname={this.state.name} />
        </div>;
    }
}
