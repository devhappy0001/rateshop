import * as authTypes from './authTypes';

const initialState = {
    
    isLoading   : false,
    isLoggedIn  : false,
    user        : null,
    response    : {

        result  : false,
        message : '',
        errors  : null
    }
};

const authReducers = (state=initialState,action) => {

    switch(action.type) {

        case authTypes.LOGIN_USER : return {

            ...state,
            isLoading:true
        }

        case authTypes.LOGIN_USER_SUCCESS : return {

            ...state,
            isLoading   : false,
            isLoggedIn  : true,
            user        : action.payload.user,
            response    : {
                            ...state.response,
                            result  : true,
                            errors  : null,
                            message : action.payload.message 
                          }

        }

        case authTypes.LOGIN_USER_FAILURE : return {

            ...state,
            isLoading   : false,
            isLoggedIn  : false,
            user        : null,
            response    : {
                            ...state.response,
                            result  : false,
                            errors  : action.payload.errors,
                            message : action.payload.message 
                          }
        }

        default : return state
    }
}

export default authReducers;