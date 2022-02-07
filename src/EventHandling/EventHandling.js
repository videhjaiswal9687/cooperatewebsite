import React, { Component } from 'react';

export default class EventHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: true,
            emp_name: "",
            emp_id: 0,
            emp_salary: 0.0,
            user_name: "",
            user_age: 0,
            user_address: ""
        }
        //this.showHideContent = this.showHideContent.bind(this)
    }

    showHideContent() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    empDetails = (name, id, salary) => {
        console.log(name, id, salary)
        this.setState({
            emp_name: name,
            emp_id: id,
            emp_salary: salary
        })
    }

    userDetails(name, age, address) {
        console.log(name, age, address)
        this.setState({
            user_name: name,
            user_age: age,
            user_address: address
        })
    }


    render() {
        return <div>
            <h1>EventHandling</h1>
            <button onClick={this.showHideContent.bind(this)}>
                {this.state.isShow ? <h2>Hide</h2> : <h2>Show</h2>}
            </button>
            {this.state.isShow ? <div>
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and the like).
            </div> : null}<br></br>
            <h1>Name:{this.state.emp_name}</h1>
            <h1>ID:{this.state.emp_id}</h1>
            <h1>Salary:{this.state.emp_salary}</h1>
            <button onClick={() => this.empDetails("Priya Sharma", 1213, 45678.3434)}>
                EmpDetails
            </button><br></br>
            <h1>Name:{this.state.user_name}</h1>
            <h1>Age:{this.state.user_age}</h1>
            <h1>Address:{this.state.user_address}</h1>
            {/* <button onClick={() => this.userDetails("Neha Sharma", 21, "Indore M.P")}>
                userDetails
            </button> */}
            <button onClick={this.userDetails.bind(this,"Priya Sharma", 21, "Indore M.P")}>
                userDetails
            </button>
        </div>;
    }
}
