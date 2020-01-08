import { actionChannel, call, put } from 'redux-saga/effects'
import { GET_CAT_REQUEST } from '../redux/catvotes/catVotesTypes'
import { getCatRequest, getCatSuccess, getCatFailure } from '../redux/catvotes/catVotesActions'
import axios from 'axios'

const config = {
    'x-api-key': "12a6c6ee-0295-4785-8b42-8cae7f06fd86"
}

const getCat = () => {
    return axios.get('https://api.thecatapi.com/v1/images/search', {headers: config});
}

export function* getVoteCat() {
    yield actionChannel(GET_CAT_REQUEST);
    //yield put(getCatRequest());
    try {
        const response = yield call(getCat);
        console.log(response)
        yield put(getCatSuccess(response.data[0]));
    } catch (error) {
        yield put(getCatFailure(error.message));
    }
}