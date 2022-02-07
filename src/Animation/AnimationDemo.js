import { motion } from 'framer-motion';
import React, { Component } from 'react';
// npm install framer-motion
export default class AnimationDemo extends Component {
    render() {
        return <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

            {/* <motion.div
                // animate={{rotate:360,scale:2}}
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{ duration: 5 }}
                style={{ display: 'flex' }}
            >
                <h1 style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    height: '25vh', width: '50vh', backgroundColor: 'teal', margin: 'auto', color: 'white'
                }}>
                    AnimationDemo</h1>
            </motion.div> */}

            <motion.div
                animate={{rotate:360, x:256}}
                transition={{ duration: 5 }}
                style={{ display: 'flex' }}
            >
                <h1 style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    height: '25vh', width: '50vh', backgroundColor: 'red', margin: 'auto', color: 'white'
                }}>
                    AnimationDemo</h1>
            </motion.div>
            <motion.div
                animate={{rotate:360, x:256}}
                transition={{ duration: 5 }}
                style={{ display: 'flex' }}
            >
                <h1 style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    height: '25vh', width: '50vh', backgroundColor: 'green', margin: 'auto', color: 'white'
                }}>
                    AnimationDemo</h1>
            </motion.div>
            <motion.div
                animate={{rotate:360, y:250}}
                transition={{ duration: 5 }}
                style={{ display: 'flex' }}
            >
                <h1 style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    height: '25vh', width: '50vh', backgroundColor: 'orange', margin: 'auto', color: 'white'
                }}>
                    AnimationDemo</h1>
            </motion.div>
            <motion.div
                animate={{rotate:360, y:250}}
                transition={{ duration: 5 }}
                style={{ display: 'flex' }}
            >
                <h1 style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    height: '25vh', width: '50vh', backgroundColor: 'gray', margin: 'auto', color: 'white'
                }}>
                    AnimationDemo</h1>
            </motion.div>
            <motion.div
                darg="x"
                dragConstraints={{ left:-100,right:100}}
                animate={{y:250, x:-850}}
                whileHover={{scale:2}}
                whileTap={{scale:1.1}}
            >
                <h1 style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    height: '25vh', width: '50vh', backgroundColor: 'blue', margin: 'auto', color: 'white'
                }}>
                    AnimationDemo</h1>
            </motion.div>
        </div>;
    }
}


