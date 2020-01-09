import {combineReducers} from 'redux'
import catVotesReducer from './catvotes/catVotesReducer'

export const rootReducer = combineReducers({
    votes: catVotesReducer
})

