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

		// const response = yield call(createGetUserData(payload)); // {credentials, token}

		if (path === 'auth/register') {
			const company = yield call(() => postData('POST', 'companies'));

			const response = yield call(() =>
				postData('POST', path, { company_id: company._id, ...credentials })
			); // {credentials, token}

			yield put(userFetchSucceded(response));
		} else if (path === 'auth/login') {
			const response = yield call(() => postData('POST', path, credentials)); // {credentials, token}

			yield put(userFetchSucceded(response));
		}
	} catch (error) {
		yield put(userFetchFailed(error));
	}
}

// For register or Login: return new or old user data
// function* createGetUserData(payload) {
// 	const { path, credentials } = payload;

// 	if (path === 'auth/register') {
// 		const company = yield call(() => postData('POST', 'companies'));

// 		return yield call(() =>
// 			postData('POST', path, { company_id: company._id, ...credentials })
// 		); // {credentials, token}
// 	} else if (path === 'auth/login') {
// 		return yield call(() => postData('POST', path, credentials)); // {credentials, token}
// 	}
// }

/** Watcher which gets called everytime the 'USER_FETCH_ASYNC' action type is
 *  triggered !
 */
function* watchUserFetchRequest() {
	yield takeEvery(userTypes.USER_FETCH_ASYNC, fetchUserDataAsync);
}

export default function* userSaga() {
	yield all([call(watchUserFetchRequest)]);
}
