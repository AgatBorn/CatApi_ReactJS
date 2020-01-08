import { all, fork } from 'redux-saga/effects'
import {getVoteCat} from './getVoteCatSaga'

export default function* rootSaga() {
    yield all([
      fork(getVoteCat),
    ]);
  }