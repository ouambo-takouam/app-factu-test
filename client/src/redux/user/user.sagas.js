import { takeEvery, all, call, put } from 'redux-saga/effects';
import { postData } from '../../utils/fetch.utils.js';
import { userTypes } from './user.types.js';
import {
	userFetchRequested,
	userFetchSucceded,
	userFetchFailed,
} from './user.actions.js';

/** Async code build to manage user connection.
 *  I'm also thinking about browsing some data from the server
 *  that can be usefull on the front-end !
 */
function* fetchUserDataAsync({ payload }) {
	const { path, credentials } = payload;

	try {
		yield put(userFetchRequested());
		const userInfo = yield call(() => postData(path, credentials)); // {credentials, token}
		yield put(userFetchSucceded(userInfo));
	} catch (error) {
		yield put(userFetchFailed());
	}
}

function* watchUserFetchRequest() {
	yield takeEvery(userTypes.USER_FETCH_ASYNC, fetchUserDataAsync);
}

export default function* userSaga() {
	yield all([call(watchUserFetchRequest)]);
}
