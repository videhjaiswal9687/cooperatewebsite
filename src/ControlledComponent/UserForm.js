import React, { Component } from 'react';

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: "",
            email: "",
            password: "",
            gender: "Male",
            city: "Indore",
            address: "",
            dob: ""
        }
        this.state=this.initialState
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        //It prevents a browser to reload or refresh
        e.preventDefault()
        console.log(this.state)
        this.setState(this.initialState)
    }

    render() {
        return <div>
            <h1>UserForm</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Name:</label>
                    <input type="text"
                        name="name"
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Enter a Name"
                    />
                </div>
                <div>
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Email:</label>
                    <input type="email"
                        name="email"
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Enter a Email"
                    />
                </div>
                <div>
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Password:</label>
                    <input type="password"
                        name="password"
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Enter a Password"
                    />
                </div>
                <div>
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Gender:</label>
                    <input type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.handleChange} />
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Male</label>

                    <input type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.handleChange} />
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Female</label>

                    <input type="radio"
                        name="gender"
                        value="Other"
                        checked={this.state.gender === "Other"}
                        onChange={this.handleChange} />
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Other</label>
                </div>
                <label style={{ fontWeight: 'bold', fontSize: '32px' }}>City:</label>
                <select name="city" value={this.state.city}
                    onChange={this.handleChange}
                    style={{ fontWeight: 'bold', fontSize: '32px' }}>
                    <optgroup label="Madhya Pradesh">
                        <option value="Indore" >Indore</option>
                        <option value="Ujjain">Ujjain</option>
                        <option value="Bhopal">Bhopal</option>
                    </optgroup>
                    <optgroup label="Karnataka" disabled>
                        <option value="Banglore">Banglore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Manglore">Manglore</option>
                    </optgroup>
                    <optgroup label="Maharastra">
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Nagpur">Nagpur</option>
                    </optgroup>
                </select>
                <div>
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Address:</label>
                    <textarea
                        name="address"
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                        value={this.state.address}
                        onChange={this.handleChange}
                        rows={5}
                        cols={15}
                        placeholder="Enter a Address"
                    />
                </div>
                <div>
                    <label style={{ fontWeight: 'bold', fontSize: '32px' }}>DOB:</label>
                    <input type="date" name="dob" value={this.state.dob}
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit" style={{ fontSize: '32px', fontWeight: 'bold' }}>Submit</button>
                </div>
            </form>
        </div>;
    }
}
