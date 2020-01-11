import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import { rootReducer } from './redux/rootReducer'
import { initSagas } from './initSagas';

export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger()))
    initSagas(sagaMiddleware);

    return store;
}
