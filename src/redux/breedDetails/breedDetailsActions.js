import { GET_BREED_DETAILS_REQUEST, GET_BREED_DETAILS_SUCCESS, GET_BREED_DETAILS_FAILURE } from './breedDetailsTypes'

export const getBreedDetailsRequest = (id) => {
    return {
        type: GET_BREED_DETAILS_REQUEST,
        payload: id
    }
}

export const getBreedDetailsSuccess = (details) => {
    return {
        type: GET_BREED_DETAILS_SUCCESS,
        payload: details
    }
}

export const getBreedDetailsFailure = (error) => {
    return {
        type: GET_BREED_DETAILS_FAILURE,
        payload: error
    }
}