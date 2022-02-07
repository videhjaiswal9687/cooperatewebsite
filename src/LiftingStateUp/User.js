import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return <div>
            <h1>User Component</h1>
            <h1>Name:{this.props.name}</h1>
            <button onClick={() => this.props.demoParent("Neha Sharma")}>
                ChangeName
            </button>
        </div>;
    }
}
