/*
Destructuring was introduced in ES6. It 's a Javascript feature that allows
us to extract multiple pieces of data from an array or object and assign them to their
own variables
*/

import React, { Component } from 'react';

export default class Welcome extends Component {
    state = {
        age: 20,
        address: 'Indore M.P',
        gender: 'Male',
        dob: '12May1990'
    }
    render() {
        //destructring of props
        const { stud_name, stud_rollno, stud_course, stud_fees } = this.props.getStudDet;
        //destructring of state
        const { address, gender, dob,age} = this.state
        return <div>
            <h1>Destructuring Demo</h1>
            <h1>Name:{this.props.getStudDet.stud_name}</h1>
            <h1>Rollno:{stud_rollno}</h1>
            <h1>Course:{stud_course}</h1>
            <h1>Fees:{stud_fees}</h1>

            <h1>Age:{this.state.age}</h1>
            <h1>Address:{address}</h1>
            <h1>Gender:{gender}</h1>
            <h1>DOB:{dob}</h1>
        </div>;
    }
}
