import { SET_CURRENT_LANGUAGE } from './localeTypes'

const initialState = {
    lang: "en"
}

const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_LANGUAGE:
            return {
                lang: action.payload
            }
        default:
            return state;
    }
}

export default localeReducer;