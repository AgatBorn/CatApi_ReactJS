import { GET_ALL_BREEDS_REQUEST, GET_ALL_BREEDS_SUCCESS, GET_ALL_BREEDS_FAILURE } from './breedsTypes'

export const getAllBreedsRequest = () => {
    return {
        type: GET_ALL_BREEDS_REQUEST
    }
}

export const getAllBreedsSuccess = (breeds) => {
    return {
        type: GET_ALL_BREEDS_SUCCESS,
        payload: breeds
    }
}

export const getAllBreedsFailure = (error) => {
    return {
        type: GET_ALL_BREEDS_FAILURE,
        payload: error
    }
}