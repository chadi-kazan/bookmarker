import { CHANGE_TAB,
    FETCH_CHAPTERS_REQUESTED,
    FETCH_CHAPTERS_SUCCEEDED,
    FETCH_CHAPTERS_FAILED} from './actions';

export const changeTab = (newTab) => {
    return {
        type: CHANGE_TAB,
        payload: newTab
    };
};

export const loadChapters = () => {
    return {
        type: FETCH_CHAPTERS_REQUESTED
    }
};

export const chaptersLoaded = (payload) => {
    return {
        type: FETCH_CHAPTERS_SUCCEEDED,
        payload
    }
};

export const chaptersLoadingFailed = (message) => {
    return {
        type: FETCH_CHAPTERS_FAILED,
        message
    }
};