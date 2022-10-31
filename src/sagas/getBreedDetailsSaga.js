import { call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import { getBreedDetailsSuccess, getBreedDetailsFailure } from '../redux'

const config = {
    'x-api-key': "12a6c6ee-0295-4785-8b42-8cae7f06fd86"
}

const getDetails = (id) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`, {headers: config});
}

const searchImages = (category) => {
    let query = `?limit=1&breed_id=${category}`;

    const url = query.length > 1 ? (`https://api.thecatapi.com/v1/images/search${query}`) : ('https://api.thecatapi.com/v1/images/search');

    return axios.get(url, {headers: config});
}

export function* getBreedDetails(action) {
    try {
        const [details, img] = yield all ([
            call(getDetails, action.payload),
            call(searchImages, action.payload)
        ]);
        const response = {
            ...details.data[0].breeds[0],
            "img": img.data[0].url
        }
        yield put(getBreedDetailsSuccess(response));
    } catch (error) {
        yield put(getBreedDetailsFailure(error.message));
    }
}