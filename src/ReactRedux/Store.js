//Single Reducer
// import {reducer} from './Reducer'
// import {createStore} from 'redux'
// const Store = createStore(reducer)
// export default Store

//Combine Reducer
import {reducerCovaxin,reducerCovishield} from './Reducer'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
//npm install redux-logger

//combine reducer
const reducer = combineReducers({
    covaxin:reducerCovaxin,
    covishield:reducerCovishield
})

const Store = createStore(reducer,applyMiddleware(logger))
export default Store