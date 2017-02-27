import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { fetchAllSaga } from './middleware/data.saga';
import {
  autoRehydrate
} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(AppReducer, applyMiddleware(thunk, sagaMiddleware), autoRehydrate());
sagaMiddleware.run(fetchAllSaga);
export default Store;
