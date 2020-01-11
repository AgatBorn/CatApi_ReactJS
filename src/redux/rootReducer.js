import {combineReducers} from 'redux'
import catVotesReducer from './catvotes/catVotesReducer'
import breedsReducer from './breeds/breedsReducer'
import breedDetailsReducer from './breedDetails/breedDetailsReducer'

export const rootReducer = combineReducers({
    votes: catVotesReducer,
    breeds: breedsReducer,
    breedDetails: breedDetailsReducer,
})