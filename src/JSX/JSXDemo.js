/*
JSX :- Javascript XML
It allows us to write HTML Code in React
It allows us to write HTML Elements in Javascript and place them in the DOM
It converts HTML tags into react elements.
*/

import React from 'react';

//without JSX
const myelem = React.createElement(
    'h1',
    { className: 'test' },
    "React Without JSX"
)

//Use JSX
const name = "Videh Jaiswal"
const msg = <h1 style={{ backgroundColor: 'teal', color: 'white' }}>Hello,{name}</h1>

function calculate(x, y) {
    if (x > y) {
        return <h1 className='add'>Addition is:{x + y}</h1>
    } else {
        return <h1 className='mul'>Multiply is:{x * y}</h1>
    }
}

export const JSXDemo = () => {
    return <div>
        <h1>JSXDemo</h1>
        {myelem}
        {msg}
        {calculate(12, 34)}
    </div>;
};
