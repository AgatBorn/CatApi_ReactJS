import { GET_ALL_BREEDS_REQUEST, GET_ALL_BREEDS_SUCCESS, GET_ALL_BREEDS_FAILURE } from './breedsTypes'

const initialState = {
    loading: false,
    breeds: [],
    error: ''
}

const breedsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_BREEDS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_BREEDS_SUCCESS:
            return {
                loading: false,
                breeds: action.payload,
                error: ''
            }
        case GET_ALL_BREEDS_FAILURE:
            return {
                loading: false,
                breeds: [],
                error: action.payload
            }
        default: return state
    }
}

export default breedsReducer