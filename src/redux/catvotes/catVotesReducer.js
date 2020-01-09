import {GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_FAILURE, VOTE_CAT_REQUEST, VOTE_CAT_SUCCESS, VOTE_CAT_FAILURE} from './catVotesTypes'

const initialState = {
    loading: false,
    cat: {},
    error: '',
    getNextImage: true
}

const catVotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAT_REQUEST:
            return {
                ...state,
                loading: true,
                getNextImage: false
            }
        case GET_CAT_SUCCESS:
            return {
                loading: false,
                cat: action.payload,
                error: '',
                getNextImage: false
            }
        case GET_CAT_FAILURE:
            return {
                loading: false,
                cat: {},
                error: action.payload,
                getNextImage: false
            }
        case VOTE_CAT_REQUEST:
            return {
                ...state,
                loading: true,
                getNextImage: false
            }
        case VOTE_CAT_SUCCESS:
            return {
                loading: false,
                cat: {},
                error: '',
                getNextImage: true
            }
        case VOTE_CAT_FAILURE:
            return {
                loading: false,
                cat: {},
                error: action.payload,
                getNextImage: false
            }
        default: return state
    }
}

export default catVotesReducer