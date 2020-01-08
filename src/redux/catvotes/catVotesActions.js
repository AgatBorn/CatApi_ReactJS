import {GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_FAILURE, VOTE_CAT_REQUEST, VOTE_CAT_SUCCESS, VOTE_CAT_FAILURE} from './catVotesTypes'

export const getCatRequest = () => {
    return {
        type: GET_CAT_REQUEST
    }
}

export const getCatSuccess = cat => {
    return {
        type: GET_CAT_SUCCESS,
        payload: cat
    }
}

export const getCatFailure = error => {
    return {
        type: GET_CAT_FAILURE,
        payload: error
    }
}

export const voteCatRequest = (vote) => {
    return {
        type: VOTE_CAT_REQUEST,
        payload: vote
    }
}

export const voteCatSuccess = () => {
    return {
        type: VOTE_CAT_SUCCESS
    }
}

export const voteCatFailure = error => {
    return {
        type: VOTE_CAT_FAILURE,
        payload: error
    }
}