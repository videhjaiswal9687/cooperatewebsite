/*
In function Component we can not use life cycle methods and can not create state so we need use
useState to create State and useEffect method which is called like 
1.) componentDidMount()
2.) componentDidUpdate()
3.) componentWillUnMount()

useState:- It is a hook that allows us to add react state to function component. we call it 
inside a function component to add some local state to it.
Syntax:-
useState returns a pair:- current state value and a function to update it.

*/

import { useState, useEffect } from 'react'

const HookDemo = () => {
    //state 
    const [count1, setCount1] = useState(10)
    const [count2, setCount2] = useState(20)
    const [name, setName] = useState("Rahul Sharma")
    const [show, setShow] = useState(true)

    //useEffect
    //call only one time
    // useEffect(()=>{
    //     console.log("Calling useEffect!!!",count1)
    // },[])

    //call for a particular state
    // useEffect(() => {
    //     console.log("Calling useEffect!!!", count1, count2)
    // }, [count1])

    useEffect(() => {
        console.log("Calling useEffect!!!", count1, count2, name)
    })

    const delChild = () => {
        setShow(false)
    }

    return (
        <div>
            <h1>HookDemo</h1>
            <h1>Count1:{count1}</h1>
            <button
                style={{ backgroundColor: 'red', color: 'white', fontSize: '28px' }}
                onClick={() => setCount1(count1 + 1)}>Update Count1</button><br></br>
            <h1>Count2:{count2}</h1>
            <button
                style={{ backgroundColor: 'red', color: 'white', fontSize: '28px' }}
                onClick={() => setCount2(count2 + 1)}>Update Count2</button>
            <h1>Name:{name}</h1>
            <button
                style={{ backgroundColor: 'red', color: 'white', fontSize: '28px' }}
                onClick={() => setName("Neha Verma")}>Update Name</button>
            {show ? <ChildComponent /> : <h1>Component has been removed!!!</h1>}
            <button
                style={{ backgroundColor: 'red', color: 'white', fontSize: '28px' }}
                onClick={delChild}>DelChild</button>
        </div>
    )
}

function ChildComponent() {
    return (
        <div>
            <h1>ChildComponent</h1>
        </div>
    )
}

export default HookDemo;






