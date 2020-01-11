import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getBreedDetailsSuccess, getBreedDetailsFailure } from '../redux'

const config = {
    'x-api-key': "12a6c6ee-0295-4785-8b42-8cae7f06fd86"
}

const getDetails = (id) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`, {headers: config});
}

export function* getBreedDetails(action) {
    try {
        const response = yield call(getDetails, action.payload);
        console.log(response.data[0].breeds[0])
        yield put(getBreedDetailsSuccess(response.data[0].breeds[0]));
    } catch (error) {
        yield put(getBreedDetailsFailure(error.message));
    }
}