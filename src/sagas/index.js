import { takeEvery } from 'redux-saga/effects'
import { GET_CAT_REQUEST, VOTE_CAT_REQUEST } from '../redux/catvotes/catVotesTypes'
import {getVoteCat, sendVoteForCat} from './getVoteCatSaga'

export function* rootSaga() {
    yield [
      yield takeEvery (GET_CAT_REQUEST, getVoteCat),
      yield takeEvery (VOTE_CAT_REQUEST, sendVoteForCat),
    ];
  }