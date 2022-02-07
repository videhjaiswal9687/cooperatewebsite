import React from 'react';

const empStyle = {
    backgroundColor: 'teal',
    color: 'white',
    border: '5px solid dashed'
}
const managStyle = {
    backgroundColor: 'orange',
    color: 'white',
    border: '5px solid dotted'
}

const Employee = (props) => {
    return <div>
        {/* calling another component */}
        <div className='Emp'>
            <h1>EMPLOYEE DETAILS</h1>
            <h1>Name:{props.name}</h1>
            <h1>Id:{props.id}</h1>
            <h1>Salary:{props.salary}</h1>
            <h1>Department:{props.department}</h1><hr></hr>
        </div>
        {/* <div style={managStyle}>
            <Manager name="Neha Sharma" id={232} salary={56789.565} exp={5} />
        </div> */}
    </div>;
};

const Manager = (props) => {
    return (
        <div>
            <h1>MANAGER DETAILS</h1>
            <h1>Name:{props.name}</h1>
            <h1>Id:{props.id}</h1>
            <h1>Salary:{props.salary}</h1>
            <h1>Experience:{props.exp}</h1><hr></hr>
        </div>
    )
}

export {Employee,Manager}