import {createStore, applyMiddleware} from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'

import { initSagas } from './initSagas';
import { createLogger } from 'redux-logger'

export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger()))
    initSagas(sagaMiddleware);

    return store;
}
