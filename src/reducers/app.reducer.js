import { FETCH_CHAPTERS_REQUESTED, FETCH_CHAPTERS_SUCCEEDED, FETCH_CHAPTERS_FAILED } from '../actions/actions';

const initialState = {chapters: [], sections: []};

export default function appState (state = initialState, action) {
    switch (action.type) {
        case FETCH_CHAPTERS_SUCCEEDED:
            return {...state, chapters: action.payload, loadingChapters: false};
        case FETCH_CHAPTERS_FAILED:
            return {...state, chapters: [], error: action.message, loadingChapters: false};
        case FETCH_CHAPTERS_REQUESTED:
            return {...state, chapters: [], loadingChapters: true};
        default:
            return state;
    }
}

