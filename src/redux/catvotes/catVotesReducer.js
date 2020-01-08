import {GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_FAILURE, VOTE_CAT_REQUEST, VOTE_CAT_SUCCESS, VOTE_CAT_FAILURE} from './catVotesTypes'

const initialState = {
    loading: false,
    cat: {},
    error: ''
}

const catVotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CAT_SUCCESS:
            return {
                loading: false,
                cat: action.payload,
                error: ''
            }
        case GET_CAT_FAILURE:
            return {
                loading: false,
                cat: {},
                error: action.payload
            }
        case VOTE_CAT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VOTE_CAT_SUCCESS:
            return {
                loading: false,
                cat: {},
                error: ''
            }
        case VOTE_CAT_FAILURE:
            return {
                loading: false,
                cat: {},
                error: action.payload
            }
        default: return state
    }
}

export default catVotesReducer