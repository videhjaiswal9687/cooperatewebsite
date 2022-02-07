import React, { Component } from 'react';
// import { MyContext } from './Demo'
// import {MyContext} from './Context';

import { Consumer } from './Context';

export default class Salary extends Component {
    render() {
        return <div>
            <h1>Salary Component</h1>
            {/* <h1>Salary:{this.props.salary}</h1> */}
            {/* <MyContext.Consumer>
             {data=> <h1>Salary:{data}</h1>}
            </MyContext.Consumer> */}

            {/* <MyContext.Consumer>
                {({ salary, clickChange }) => <div>
                    <h1>Salary:{salary}</h1>
                    <button onClick={clickChange}>ChangeSalary</button>
                </div>
                }
            </MyContext.Consumer> */}

            <Consumer>
                {({ salary, clickChange }) => <div>
                    <h1>Salary:{salary}</h1>
                    <button onClick={clickChange}>ChangeSalary</button>
                </div>
                }
            </Consumer>
        </div>;
    }
}
