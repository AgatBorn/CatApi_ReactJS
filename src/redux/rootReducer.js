import {combineReducers} from 'redux'
import catVotesReducer from './catvotes/catVotesReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) =>  combineReducers({
    votes: catVotesReducer,
    router: connectRouter(history)
})

export default rootReducer
