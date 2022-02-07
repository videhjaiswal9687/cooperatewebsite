import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//useSelector:Allows you to extract data from the Redux store state, using a selector function.
//useDispatch:This hook returns a reference to the dispatch function from the Redux store.

import { buyCovaxin, buyCovishield } from './Action'

export const MedicalHook = ()=>{
    //Single Reducer
    // const noOfCovaxin = useSelector(state=>state.noOfCovaxin)
    // const noOfCovishield = useSelector(state=>state.noOfCovishield)
   
    //combine Reducer
    const noOfCovaxin = useSelector(state=>state.covaxin.noOfCovaxin)
    const noOfCovishield = useSelector(state=>state.covishield.noOfCovishield)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>MedicalHook Component</h1>
            <h1>Number Of Covaxin:{noOfCovaxin}</h1>
            <button onClick={()=> dispatch(buyCovaxin())}>BuyCovaxin</button>
            <h1>Number Of Covishield:{noOfCovishield}</h1>
            <button onClick={()=> dispatch(buyCovishield())}>BuyCovishield</button>
        </div>
    )
}