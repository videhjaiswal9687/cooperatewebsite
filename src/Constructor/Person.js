/*
Constructor is a method used to initialze an object's state in a class.It called automatically
during the creation of an object in a class.

In React:-
1.) It used for initializing local state of the component by assigning an object to this.state.
2.) It used for binding event handler methods that occur in our component.
3.) We need to call super(props) method before any other statement, if we do not call, then
this.props. will be undefined in the constructor.
4.) If we want to update the state, we have to call this.setState() method.

*/

import React, { Component } from 'react';

export default class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 25,
            name: this.props.name
        }
        this.handleAge = this.handleAge.bind(this)
    }
    //if you want previous value don't use it
    // updateAge = () => {
    //     this.setState({
    //         age: this.state.age + 1
    //     })
    //     //console.log(this)
    // }

    // updateAge = () => {
    //     this.setState(function (state, props) {
    //         return {
    //             age: state.age + 1
    //         }
    //     })
    // }
    updateAge = () => {
        this.setState((state, props) => (
            {
                age: state.age + 1,
                name: state.name + " Sharma"
            }
        ))
    }

    handleAge() {
        // console.log(this)
        this.updateAge()
        this.updateAge()
        this.updateAge()
    }

    render() {
        return <div>
            <h1>Person Details</h1>
            <h1>Name:{this.state.name}</h1>
            <h1>Age:{this.state.age}</h1>
            {/* <h1>Age:{this.props.age}</h1> */}
            <button onClick={this.updateAge}>UpdateAge1</button><br></br>
            <button onClick={this.handleAge}>UpdateAge2</button>
        </div>;
    }
}












