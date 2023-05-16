import { userTypes } from './user.types';

function userFetchAsync(payload) {
	return { type: userTypes.USER_FETCH_ASYNC, payload };
}

function userFetchRequested() {
	return { type: userTypes.USER_FETCH_REQUESTED };
}

function userFetchSucceded(payload) {
	return { type: userTypes.USER_FETCH_SUCCEDED, payload };
}

function userFetchFailed(payload) {
	return { type: userTypes.USER_FETCH_FAILED, payload };
}

export {
	userFetchAsync,
	userFetchRequested,
	userFetchSucceded,
	userFetchFailed,
};
