import { SEARCH_GET_BREEDS_AND_CATEGORIES_REQUEST, SEARCH_GET_BREEDS_AND_CATEGORIES_FINISHED, SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from './searchTypes'

const initialState = {
    loading: false,
    breeds: [],
    categories: [],
    breeds_error: '',
    categories_error: '',
    loading_images: false,
    images: [],
    images_error: ''
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_GET_BREEDS_AND_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                breeds: [],
                categories: []
            }
        case SEARCH_GET_BREEDS_AND_CATEGORIES_FINISHED:
            return {
                ...state,
                categories: action.payload[0],
                breeds: action.payload[1],
                loading: false
            }
        case SEARCH_REQUEST:
            return {
                ...state,
                loading_images: true,
                images: []
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading_images: false,
                images: action.payload,
                images_error: ''
            }
        case SEARCH_FAILURE:
            return {
                ...state,
                loading_images: false,
                images: [],
                images_error: action.payload
            }
        default: return state
    }
}

export default searchReducer