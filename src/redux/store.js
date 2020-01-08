import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'

import { initSagas } from './initSagas';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer(history), applyMiddleware(myRouterMiddleware, sagaMiddleware, createLogger()))
    initSagas(sagaMiddleware);

    return store;
}
