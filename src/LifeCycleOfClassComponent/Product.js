/*
Class Component's Life Cycle
Each Component has several lifecycle methods.These methods are used for mount,update and unmount.
1.) Mounting:- Component is rendered to the DOM for the frist time.
2.) Updating:- Re-rendered the Component by Changes to props or state.
3.) UnMounting:- Component is removed from DOM.

Mounting:- These methods are called in the following order when component inserted into the DOM.
1.) Constructor()
2.) static getDerivedStateFromProps()
3.) render()
4.) componentDidMount()

Updating:- These methods are called in the following order when component is being re-rendered.
1.) static getDerivedStateFromProps()
2.) shouldComponentUpdate()
3.) render()
4.) getSnapshotBeforeUpdate(prevProps,prevState)
5.) componentDidUpdate()

UnMounting:- Component removed from the DOM
1.) static getDerivedStateFromProps()
2.) shouldComponentUpdate()
3.) render()
4.) getSnapshotBeforeUpdate(prevProps,prevState)
5.) componentWillUnMount()
6.) componentDidUpdate() 

*/

import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product_price: this.props.price,
            show: true
        }
        console.log("Constructor() is calling !!!")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps!!!")
        return null
    }

    componentDidMount() {
        console.log("componentDidMount()!!!")
        setTimeout(() => {
            this.setState({
                product_price: this.state.product_price + 121.121
            })
        }, 3000)
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate() is called!!")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate!!")
        document.getElementById('div1').innerHTML = "<h1>Before Update, Product Price was Rs:" + prevState.product_price + "</h1>"
        return null
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()!!!")
        document.getElementById('div2').innerHTML = "<h1>After Update, Product Price is Rs:" + this.state.product_price + "</h1>"
    }

    updatePrice = () => {
        this.setState({
            product_price: this.state.product_price + 121.121
        })
    }

    delChild = ()=> {
        this.setState({
            show:false
        })
    } 

    render() {
        console.log("Render method is Calling!!!")
        return <div>
            <h1>Product Details</h1>
            <h1>Product Price:{this.state.product_price}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            <button onClick={this.updatePrice}>Update</button>
            {this.state.show ? <ChildComponent /> : <h1 style={{backgroundColor:'teal'}}>Component has been Removed</h1>}
            <button onClick={this.delChild}>DelChild</button>
        </div>;
    }
}

class ChildComponent extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        return (
            <>
                <h1>ChildComponent!!</h1>
            </>
        )
    }
}