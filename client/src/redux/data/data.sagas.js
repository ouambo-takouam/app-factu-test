import { takeEvery, all, call, put } from 'redux-saga/effects';
import { getData } from '../../utils/fetch.utils.js';
import { dataTypes } from './data.types.js';
import {
	dataFetchRequested,
	dataFetchSucceded,
	dataFetchFailed,
} from './data.actions.js';

/** Saga logic used to fetch company data fom remote server and
 *  update redux store. These data will be used on frond-end.
 */
function* fetchDataAsync({ payload }) {
	// data passed by dashboard component. They will be used to make server GET request
	const { path, token } = payload;

	try {
		yield put(dataFetchRequested()); // for optional spinner loader (isLoading === true)
		const data = yield call(() => getData(path, token)); // getting data
		yield put(dataFetchSucceded({ type: path, value: data })); // passing data to redux reducer
	} catch (error) {
		yield put(dataFetchFailed(error));
	}
}

/** Watcher which gets called everytime the 'DATA_FETCH_ASYNC' action type is
 *  triggered !
 */
function* watchDataFetchRequest() {
	yield takeEvery(dataTypes.DATA_FETCH_ASYNC, fetchDataAsync);
}

export default function* dataSaga() {
	yield all([call(watchDataFetchRequest)]);
}
