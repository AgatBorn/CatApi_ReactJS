import { call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import { getAllBreedsSuccess, getAllBreedsFailure } from '../redux'

const config = {
    'x-api-key': "12a6c6ee-0295-4785-8b42-8cae7f06fd86"
}

const getBreeds = () => {
    return axios.get('https://api.thecatapi.com/v1/breeds', {headers: config});
}

const searchImages = (category) => {
    let query = `?limit=1&breed_id=${category}`;
    const url = query.length > 1 ? (`https://api.thecatapi.com/v1/images/search${query}`) : ('https://api.thecatapi.com/v1/images/search');
    return axios.get(url, {headers: config});
}

export function* getAllBreeds() {
    try {
        const allBreeds = yield call(getBreeds);
        const allBreedsIds = allBreeds.data.map(x => x.id);
        const allBreedsImages = yield all(allBreedsIds.map((breed) => call(searchImages, breed)));
        const response = allBreeds.data.map((breed, index) => {
            return {
                ...breed,
                "url": allBreedsImages[index].data[0].url
            }
        })
        console.log(response);
        yield put(getAllBreedsSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(getAllBreedsFailure(error.message));
    }
}