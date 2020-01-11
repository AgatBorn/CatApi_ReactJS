import { takeEvery } from 'redux-saga/effects'
import { GET_CAT_REQUEST, VOTE_CAT_REQUEST } from '../redux/catvotes/catVotesTypes'
import { getVoteCat, sendVoteForCat } from './getVoteCatSaga'
import { GET_ALL_BREEDS_REQUEST } from '../redux/breeds/breedsTypes'
import { getAllBreeds } from './getBreedsSaga'
import { GET_BREED_DETAILS_REQUEST } from '../redux/breedDetails/breedDetailsTypes'
import { getBreedDetails } from './getBreedDetailsSaga'

export function* rootSaga() {
    yield [
      yield takeEvery (GET_CAT_REQUEST, getVoteCat),
      yield takeEvery (VOTE_CAT_REQUEST, sendVoteForCat),
      yield takeEvery (GET_ALL_BREEDS_REQUEST, getAllBreeds),
      yield takeEvery (GET_BREED_DETAILS_REQUEST, getBreedDetails),
    ];
  }