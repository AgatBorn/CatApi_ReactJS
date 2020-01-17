import { call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import { getBreedsAndCategoriesFinished, searchSuccess, searchFailure } from '../redux'

const config = {
    'x-api-key': "12a6c6ee-0295-4785-8b42-8cae7f06fd86"
}

const getCategories = () => {
    return axios.get('https://api.thecatapi.com/v1/categories', {headers: config});
}

const getBreeds = () => {
    return axios.get('https://api.thecatapi.com/v1/breeds', {headers: config});
}

export function* getAllCategories() {
    try {
        const response = yield call(getCategories);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export function* getAllBreeds() {
    try {
        const response = yield call(getBreeds);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export function* getAllForSearch() {
    const result = yield all ([
        call(getAllCategories),
        call(getAllBreeds)
    ]);
    yield put(getBreedsAndCategoriesFinished(result));
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function appendToQuery(query, queryKey, queryValue) {
    if (!isEmpty(queryValue)) {
        if (query.length > 1) {
            query += '&';
        }
        query += `${queryKey}=${queryValue}`;
    }

    return query;
}

const searchImages = (category, breed, type, order, page) => {
    let query = '?limit=10';
    query = appendToQuery(query, 'category_ids', category);
    query = appendToQuery(query, 'breed_id', breed);
    query = appendToQuery(query, 'mime_types', type);
    query = appendToQuery(query, 'order', order);
    query = appendToQuery(query, 'page', page);

    const url = query.length > 1 ? (`https://api.thecatapi.com/v1/images/search${query}`) : ('https://api.thecatapi.com/v1/images/search');
    console.log(url);

    return axios.get(url, {headers: config});
}

export function* search(action) {
    try {
        console.log("search");
        const response = yield call(searchImages, action.payload[0], action.payload[1], action.payload[2], action.payload[3], action.payload[4]);
        const imgCount = response.headers['pagination-count'];
        console.log(imgCount);
        yield put(searchSuccess(response.data, imgCount));
    } catch (error) {
        console.log(error);
        yield put(searchFailure(error));
    }
}