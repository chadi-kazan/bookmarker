import navigation from './navigation.reducer';
import appState from './app.reducer';
import { combineReducers } from 'redux';

const AppReducer = combineReducers({
    navigation,
    data: appState
});

export default AppReducer;
