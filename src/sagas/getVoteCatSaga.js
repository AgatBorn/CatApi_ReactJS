import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getCatSuccess, getCatFailure, voteCatSuccess, voteCatFailure } from '../redux/catvotes/catVotesActions'

const config = {
    'x-api-key': "12a6c6ee-0295-4785-8b42-8cae7f06fd86"
}

const getCat = () => {
    return axios.get('https://api.thecatapi.com/v1/images/search', {headers: config});
}

const sendVote = (id, vote) => {
    const payload = {
        "image_id": id,
        "value": vote
    }
    return axios.post('https://api.thecatapi.com/v1/votes', payload, {headers: config});
}

export function* getVoteCat() {
    try {
        const response = yield call(getCat);
        console.log(response)
        yield put(getCatSuccess(response.data[0]));
    } catch (error) {
        yield put(getCatFailure(error.message));
    }
}

export function* sendVoteForCat(action) {
    try {
        const response = yield call(sendVote, action.payload.id, action.payload.vote);
        console.log(response)
        yield put(voteCatSuccess(response));
    } catch (error) {
        yield put(voteCatFailure(error.message));
    }
}
