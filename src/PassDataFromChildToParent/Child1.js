import React, { Component } from 'react';

export default class Child1 extends Component {

    sendDataToParentCom = (address) => {
        this.props.parentCallBack(address)
    }

    render() {
        return <div>
            <h1>Child1 Component</h1>
            <button onClick={() => this.sendDataToParentCom("Indore M.P")}>
                UpdateAddr
            </button>

            <button onClick={() => this.props.parentCallBack("Majestic Bangalore, Karnataka")}>
                UpdateAddr1
            </button>
        </div>;
    }
}
