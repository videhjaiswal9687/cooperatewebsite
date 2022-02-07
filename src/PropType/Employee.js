import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
npm install prop-types
*/
export default class Employee extends Component {
  render() {
    return <div>
        <h1>Employee Details</h1>
        <h1>Hello, {this.props.name} , my id:{this.props.id} , my salary :{this.props.salary}
        </h1>
    </div>;
  }
}

Employee.propTypes = {
    name:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    salary:PropTypes.number.isRequired
}

//Default Props
Employee.defaultProps = {
    name:"Rahul Sharma",
    id:101,
    salary:50000.0
}