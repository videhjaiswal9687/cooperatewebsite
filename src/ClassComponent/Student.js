/*
Class Component (StateFull Component)
*/

import React, { Component } from 'react'

class Student extends React.Component {
    render() {
        return (
            <div>
                <Faculty name="Manoj Sharma" subject="Math" exp={5} salary={25000.0} />
                <h1>STUDENT DETAILS</h1>
                <h1>Name:{this.props.name}</h1>
                <h1>Rollno:{this.props.rollno}</h1>
                <h1>Course:{this.props.course}</h1>
                <h1>Fees:{this.props.fees}</h1><hr></hr>
            </div>
        )
    }
}

class Faculty extends Component {
    render() {
        return (
            <div>
            <h1>FACULTY DETAILS</h1>
            <h1>Name:{this.props.name}</h1>
            <h1>Subject:{this.props.subject}</h1>
            <h1>Exp:{this.props.exp}</h1>
            <h1>Salary:{this.props.salary}</h1><hr></hr>
        </div>
       )
    }
}

export default Student;