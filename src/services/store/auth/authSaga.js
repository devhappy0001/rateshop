import {take,put,call,
    // select,delay
} from 'redux-saga/effects';
import * as authTypes from './authTypes';
import {loginUserFailure, loginUserSuccess} from './authActions';
import AuthFlowRequest  from '../../../api/public/authFlow-requests';
/**
 *  Handle Watch Saga
 */
function *handleLoginSaga({email}) {
    
    try {

        const response = yield call(AuthFlowRequest.sendLoginData,{email})
       
        console.log('response',response)
        yield put(loginUserSuccess({user:response,message:'success'}))
    }
    catch(error) {

        yield put(loginUserFailure({errors:error,message:'fail'}))
    }

    
}

/**
 * Watch Saga
 */
function *watchLoginSaga() {
   
    while(true) {

        const data = yield take(authTypes.LOGIN_USER);
                     yield call(handleLoginSaga,{email: data.payload.email})
    }
}

export {

    watchLoginSaga
}