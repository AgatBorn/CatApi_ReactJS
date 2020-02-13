import { SET_CURRENT_LANGUAGE } from './localeTypes';

export const setCurrentLanguage = lang => {
    return {
        type: SET_CURRENT_LANGUAGE,
        payload: lang
    }
}