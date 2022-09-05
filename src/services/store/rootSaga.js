import {all} from 'redux-saga/effects';
import {watchLoginSaga} from './auth/authSaga';

function *rootSaga() {

    yield all([

        watchLoginSaga()
    ]);
}

export default rootSaga;

