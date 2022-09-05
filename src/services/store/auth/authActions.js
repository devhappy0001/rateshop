import {

    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE

} from './authTypes';

/**
 * 
 * @param {email,password} data 
 * @returns 
 */
const loginUser = (data) => {

    return {

        type : 'LOGIN_USER',
        payload: data
    }
}

/**
 * 
 * @param {user,message} response 
 * @returns 
 */
const loginUserSuccess = (response) => {

    return {

        type: 'LOGIN_USER_SUCCESS',
        payload: response
    }
}

/**
 * 
 * @param {errors,message} response 
 * @returns 
 */
const loginUserFailure = (response) => {

    return {

        type: 'LOGIN_USER_FAILURE',
        payload: response
    }
}

export {loginUser,loginUserFailure,loginUserSuccess}
