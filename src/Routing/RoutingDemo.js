import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Routes, Navigate, useParams, useNavigate } from 'react-router-dom';
import UserForm from '../ControlledComponent/UserForm';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import Email from '../ChildComponent/Email';
import Profile from '../ChildComponent/Profile';
/*
npm install react-router-dom
npm install --save history

BrowserRouter is used for doing client side routing with URL Segments.When we are working with the router
in react, in the background it manages history API of HTML5.I mean when we routing through different
pages that time we should maintain history so that components will be available to route back again.

Link: Is a router API which allows accessing navigation througout the application

Route: It is used to render the userInterface when any location matches.

Route inside Routes <Switch></Switch>

*/

export default class RoutingDemo extends Component {
    render() {
        return <div>
            {/* <h1>RoutingDemo</h1> */}
            <Router>
                <div>
                    {/* <Header /> */}
                    <Navbar bg="dark" expand="lg">
                        <Container>
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/" style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>Home</Nav.Link>
                                    <Nav.Link href="/login" style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>Login</Nav.Link>
                                    <Nav.Link href="/contact" style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>Form</Nav.Link>
                                    <Nav.Link href="/about" style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>AboutUs</Nav.Link>
                                    <Nav.Link href="/electronics/mobile" style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>Product</Nav.Link>
                                    {/* <Nav.Link href="/electronics/:category/:id" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Product</Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path="/" element={<Home name="Rahul Sharma" />}></Route>
                        <Route path="/login" element={<Login isLoggedIn={false} />}></Route>
                        <Route path="/contact" element={<UserForm />}></Route>
                        <Route path="/about" element={<AboutUs />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/electronics/:category" element={<Product />}></Route>
                        <Route path="/electronics/:category/:id" element={<Product />}></Route>
                        <Route path="/about/email" element={<Email />}></Route>
                        <Route path="/about/profile" element={<Profile />}></Route>
                    </Routes>
                </div>
            </Router>


        </div>;
    }
}

function Product() {
    const { category, id } = useParams();
    return (
        <div style={{ backgroundColor: 'teal', color: 'white' }}>
            <h1>Product Page!!</h1>
            <h1>Product Name:{category}</h1>
            <h1>Product Id:{id}</h1>
        </div>
    )
}


function Header() {
    return (
        <div>
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/electronics/mobile">Product</Link></li>
            </ul>
        </div>
    )
}

const PushComponent = () => {
    let navigate = useNavigate()
    function handleClick() {
        navigate("/dashboard")
    }
    return (
        <button type="button" onClick={handleClick}>Click me!</button>
    )
}

function AboutUs() {
    return (
        <div style={{ backgroundColor: 'olive', color: 'white' }}>
            <h1>AboutUs Page!!</h1>
            <PushComponent />
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/about/email" style={{ fontSize: '28px',color:'white' }}>Email</Link></li>
                <li><Link to="/about/profile" style={{ fontSize: '28px',color:'white' }}>Profile</Link></li>
            </ul>
        </div>
    )
}
function Home(props) {
    let navigate = useNavigate()
    return (
        <div style={{ backgroundColor: 'teal', color: 'white' }}>
            <h1>Home Page!!</h1>
            <h1>Name:{props.name}</h1>
            <button onClick={() => navigate(-2)}>Back</button>
        </div>
    )
}

const Login = (props) => {
    return (
        <div style={{ backgroundColor: 'orange', color: 'white' }}>
            <h1>Login Page!!</h1>
            {props.isLoggedIn ? <Navigate to="/dashboard" /> : <h1>Please sign up!!!</h1>}
        </div>
    )
}

const Dashboard = () => {
    let navigate = useNavigate()
    function handleClick() {
        navigate("/")
    }
    return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
            <h1>Dashboard Page!!</h1>
            <button type="button" onClick={handleClick}>Click me!</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}