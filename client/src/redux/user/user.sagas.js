import { takeEvery, all, call, put } from 'redux-saga/effects';
import { postData } from '../../utils/fetch.utils.js';
import { userTypes } from './user.types.js';
import {
	userFetchRequested,
	userFetchSucceded,
	userFetchFailed,
} from './user.actions.js';

/** Saga logic used to fetch user credentials fom remote server and
 *  update redux store
 */
function* fetchUserDataAsync({ payload }) {
	const { path, credentials } = payload;

	try {
		yield put(userFetchRequested());
		const userInfo = yield call(() => postData(path, credentials)); // {credentials, token}
		yield put(userFetchSucceded(userInfo));
	} catch (error) {
		yield put(userFetchFailed(error));
	}
}

/** Watcher which gets called everytime the 'USER_FETCH_ASYNC' action type is
 *  triggered !
 */
function* watchUserFetchRequest() {
	yield takeEvery(userTypes.USER_FETCH_ASYNC, fetchUserDataAsync);
}

export default function* userSaga() {
	yield all([call(watchUserFetchRequest)]);
}
