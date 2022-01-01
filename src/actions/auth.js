import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT
} from './types';



export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`http://3.140.210.76:8000/api/token/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });  
                
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};


export const signup = (first_name, last_name, email,password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ first_name, last_name, email,password });
    console.log(body);

    try {
        const res = await axios.post( `http://3.140.210.76:8000/api/user/`, body, config);
          console.log('hello redux this is me', res.data)

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};



export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};
