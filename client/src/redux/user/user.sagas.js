import { takeEvery, all, call, put } from 'redux-saga/effects';
import { userTypes } from './user.types.js';
import {
	userFetchRequested,
	userFetchSucceded,
	userFetchFailed,
} from './user.actions.js';
import { postData } from '../../utils/fetch.utils.js';

function* fetchUserDataAsync({ payload }) {
	const { path, credentials } = payload;

	try {
		yield put(userFetchRequested());
		const data = yield call(() => postData(path, credentials));
		yield put(userFetchSucceded(data));
	} catch (error) {
		yield put(userFetchFailed());
	}
}

function* watchUserFetchRequest() {
	yield takeEvery(userTypes.USER_FETCH_ASYNC, fetchUserDataAsync);
}

export default function* userSaga() {
	yield all([watchUserFetchRequest]);
}
