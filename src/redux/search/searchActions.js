import { SEARCH_GET_BREEDS_AND_CATEGORIES_REQUEST, SEARCH_GET_BREEDS_AND_CATEGORIES_FINISHED, SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from './searchTypes'

export const getBreedsAndCategoriesRequest = () => {
    return {
        type: SEARCH_GET_BREEDS_AND_CATEGORIES_REQUEST
    }
}

export const getBreedsAndCategoriesFinished = (data) => {
    return {
        type: SEARCH_GET_BREEDS_AND_CATEGORIES_FINISHED,
        payload: data
    }
}

export const searchRequest = (category, breed, type, order, page) => {
    return {
        type: SEARCH_REQUEST,
        payload: [category, breed, type, order, page]
    }
}

export const searchSuccess = (images, imgCount) => {
    return {
        type: SEARCH_SUCCESS,
        payload: [images, imgCount]
    }
}

export const searchFailure = (error) => {
    return {
        type: SEARCH_FAILURE,
        payload: error
    }
}