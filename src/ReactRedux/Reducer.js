import {COVAXIN,COVISHIELD} from './Type'

//Combine reducer
const initialStateCovaxin = {
    noOfCovaxin: 12341,
}
const initialStateCovishield = {
    noOfCovishield: 34343
}
//reducer accepting prevState,action
export const reducerCovaxin = (state = initialStateCovaxin, action) => {
    switch (action.type) {
        case COVAXIN: return {
            ...state,
            noOfCovaxin: state.noOfCovaxin - 1
        }
        default : return state;
    }
}
export const reducerCovishield = (state = initialStateCovishield, action) => {
    switch (action.type) {
        case COVISHIELD: return {
            ...state,
            noOfCovishield: state.noOfCovishield - 1
        }
        default : return state;
    }
}





//Single Reducer
// const initialState = {
//     noOfCovaxin: 12341,
//     noOfCovishield: 34343
// }

// //reducer accepting prevState,action
// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case COVAXIN: return {
//             ...state,
//             noOfCovaxin: state.noOfCovaxin - 1
//         }
//         case COVISHIELD: return {
//             ...state,
//             noOfCovishield: state.noOfCovishield - 1
//         }
//         default : return state;
//     }
// }