import logo from './logo.svg';
import './App.css';
// import HeaderDemo from './FunctionComponent/HeaderDemo';
// import { ContentDemo } from './FunctionComponent/ContentDemo';
// import { FooterDemo } from './FunctionComponent/FooterDemo';
// import { Employee, Manager } from './FunctionComponent/Employee';
// import Student from './ClassComponent/Student';
// import Person from './Constructor/Person';
// import { JSXDemo } from './JSX/JSXDemo';
// import Product from './LifeCycleOfClassComponent/Product';
// import EventHandling from './EventHandling/EventHandling';
// import Welcome from './DestructringProps&State/Welcome';
// import Student from './JSON/Student';
// import Employee from './PropType/Employee';
// import Greeting from './ConditionalRendering/Greeting';
// import HookDemo from './ReactHook/HookDemo';
// import Stepper from './ReactHook/CustomHook';
// const managStyle = {
//   backgroundColor: 'orange',
//   color: 'white',
//   border: '5px solid dotted'
// }

// const studDetails = {
//   stud_name: "Rahul Sharma",
//   stud_rollno: 121,
//   stud_course: "BCA",
//   stud_fees: 45678.345
// }

// import Parent from './PassDataFromParentToChild/Parent';
// import Parent1 from './PassDataFromChildToParent/Parent1';
// import Demo from './LiftingStateUp/Demo';
// import FormDemo from './ControlledComponent/FormDemo';
// import UserForm from './ControlledComponent/UserForm';
// import TestDemo from './UnControlleredComponent/TestDemo';
// import BootStrapDemo from './ReactBootStrap/BootStrapDemo';
// import RoutingDemo from './Routing/RoutingDemo';
// import Rahul from './HighOrderComponent/Rahul';
// import Neha from './HighOrderComponent/Neha';

import { Provider } from 'react-redux'
//The <Provider> component makes the Redux store available to any nested components
//that need to access the Redux store.
//import Store from './ReactRedux/Store';
import Medical from './ReactRedux/Medical';
import {MedicalHook} from './ReactRedux/MedicalHook'
import Users from './ReduxThunk/Users';
import Store from './ReduxThunk/Store';
import CustomerLogin from './ReduxThunk/CustomerLogin';
import Demo from './ContextAPI/Demo';
import AnimationDemo from './Animation/AnimationDemo';
function App() {

  // const getData1 = Stepper();
  // const getData2 = Stepper();

  return (
    <Provider store={Store}>
      <div className="App">
        {/* <h1>Welcome to React JS Sessions!!!</h1> */}
        {/* <CustomerLogin /> */}
        {/* <Demo /> */}
        <AnimationDemo />
      </div>
    </Provider>

  );
}

export default App;
{/* <Medical /> 
        <MedicalHook /> */}
        {/* <Users /> */}
{/* <Rahul course="React JS" address="Indore M.P"/>
      <Neha course="React Native" address="Banglore Karnataka"/> */}
{/* <BootStrapDemo /> */ }
{/* <RoutingDemo /> */ }
{/* <TestDemo /> */ }
{/* <FormDemo /> */ }
{/* <UserForm /> */ }
{/* <Parent /> */ }
{/* <Parent1 /> */ }
{/* <Demo /> */ }
{/* <button onClick={getData1.handleCounterIncrement}
        style={{ fontSize: '32px', width: '50px', height: '50px', }}
      >+</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ fontSize: '32px', width: '50px', height: '50px', fontWeight: 'bold' }}>
        {getData1.counter}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={getData1.handleCounterDecrement}
        style={{ fontSize: '32px', width: '50px', height: '50px', }}
      >-</button><br></br><hr></hr>
      <button onClick={getData2.handleCounterIncrement}
        style={{ fontSize: '32px', width: '50px', height: '50px', }}
      >+</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ fontSize: '32px', width: '50px', height: '50px', fontWeight: 'bold' }}>
        {getData2.counter}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={getData2.handleCounterDecrement}
        style={{ fontSize: '32px', width: '50px', height: '50px', }}
      >-</button> */}
{/* <HookDemo /> */ }
{/* <Greeting isLoggedIn={true} /> */ }
{/* <Employee name="Videh Jaiswal"  id={101} salary={45678.89}/> */ }
{/* <Student /> */ }
{/* <EventHandling/> */ }
{/* <Welcome getStudDet={studDetails} /> */ }
{/* <Person name="Rahul"/> */ }
{/* <JSXDemo /> */ }
{/* <Product price={2000}/> */ }
{/* <Student name="Vijay Kumar" rollno={23} course="B.Tech" fees={45654.34}/> */ }
{/* <div style={managStyle}>
            <Manager name="Neha Sharma" id={232} salary={56789.565} exp={5} />
        </div>
      <Employee name="Rahul Sharma" id={2323} salary={45678.3434} department="IT" />
      <Employee name="Neha Sharma" id={4545} salary={55678.3434} department="CS" />
      <Employee name="Priya Verma" id={5344} salary={65678.3434} department="IT" />
      <Employee name="Vijay Kumar" id={3434} salary={35678.3434} department="HR" /> */}
{/* <HeaderDemo />
      <ContentDemo />
      <FooterDemo /> */}
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}