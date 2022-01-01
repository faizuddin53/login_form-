import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    user: null,
};

export default function authreducer (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated:false,
            }

    
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
             return {
                ...state,
                isAuthenticated: false
            }
    
        
        
        default:
            return state
    }
};
