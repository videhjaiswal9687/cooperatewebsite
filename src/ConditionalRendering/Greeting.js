function UserGreeting(props) {
    return <h1>Welcome ,{props.name} </h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up!!!, {props.name}</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting name="Rahul Sharma" />;
    }
    return <GuestGreeting name="Guest" />;
}

export default Greeting;