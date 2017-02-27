import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { get } from '../services/data.service';
import { chaptersLoaded, chaptersLoadingFailed } from '../actions/app.action.creators';

function* getAllCodes(action) {
   try {
      const hsData = yield call(get);
      yield put(chaptersLoaded(hsData));
   } catch (e) {
      yield put(chaptersLoadingFailed(e.message));
   }
}

/*
  Starts getAllCodes on each dispatched `FETCH_ALL_REQUESTED` action.
  Allows concurrent fetches.
*/
export function* fetchAllSaga() {
  yield takeEvery('FETCH_CHAPTERS_REQUESTED', getAllCodes);
}
