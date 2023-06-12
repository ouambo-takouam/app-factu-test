import { takeEvery, all, call, put } from 'redux-saga/effects';
import { postData } from '../../utils/fetch.utils.js';
import { userTypes } from './user.types.js';
import {
	userFetchRequested,
	userFetchSucceded,
	userFetchFailed,
} from './user.actions.js';

/** Saga logic used to fetch user credentials fom nodejs server and
 *  update redux store
 */
function* fetchUserDataAsync({ payload }) {
	const { path, credentials } = payload;

	try {
		yield put(userFetchRequested());

		if (path === 'auth/register') {
			/**
			 * creates a new `company` document on mongo atlas cuz this new
			 * user should belongs to a company.
			 */
			const company = yield call(() => postData('POST', 'companies'));

			/**
			 * creates a new `user` document on mongo atlas. We gets back from server
			 * this: `{credentials, token}`
			 */
			const response = yield call(() =>
				postData('POST', path, { company_id: company._id, ...credentials })
			);

			// response data will be saved to redux store
			yield put(userFetchSucceded(response));
		} else if (path === 'auth/login') {
			/**
			 * nodejs server will check if the user is already registered
			 * and will return back this: `{credentials, token}`
			 */
			const response = yield call(() => postData('POST', path, credentials));

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
