import { GET_BREED_DETAILS_REQUEST, GET_BREED_DETAILS_SUCCESS, GET_BREED_DETAILS_FAILURE } from './breedDetailsTypes'

const initialState = {
    loading: false,
    details: {},
    error: ''
}

const getBreedDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BREED_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_BREED_DETAILS_SUCCESS:
            return {
                loading: false,
                details: action.payload,
                error: ''
            }
        case GET_BREED_DETAILS_FAILURE:
            return {
                loading: false,
                details: {},
                error: action.payload
            }
        default: return state
    }
}

export default getBreedDetailsReducer