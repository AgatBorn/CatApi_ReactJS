import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getAllBreedsSuccess, getAllBreedsFailure } from '../redux'

const config = {
    'x-api-key': "12a6c6ee-0295-4785-8b42-8cae7f06fd86"
}

const getBreeds = () => {
    return axios.get('https://api.thecatapi.com/v1/breeds', {headers: config});
}

export function* getAllBreeds() {
    try {
        const response = yield call(getBreeds);
        console.log(response)
        yield put(getAllBreedsSuccess(response.data));
    } catch (error) {
        console.log(error);
        yield put(getAllBreedsFailure(error.message));
    }
}