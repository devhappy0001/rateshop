import {createStore,applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import {loginUser} from './auth/authActions';

const configStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);

    store.dispatch(loginUser({email:'happy@gmail.com'}))
    return store;
}

export {configStore};