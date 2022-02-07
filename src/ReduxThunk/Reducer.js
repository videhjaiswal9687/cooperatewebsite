import {USER_REQUEST,USER_SUCCESS,USER_ERROR,CUSTOMER_LOGIN} from './Type'

const initialStateLogin = {
    loading: false,
    details: {},
    error: ""
}
const initialStateUsers = {
    loading: false,
    users: [],
    error: ""
}
//reducer
export const loginReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }
        case CUSTOMER_LOGIN: return {
            ...state,
            loading: false,
            details: action.payload
        }
        case USER_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}
export const userReducer = (state = initialStateUsers, action) => {
    switch (action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload
        }
        case USER_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}