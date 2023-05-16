import { userTypes } from './user.types';

function userFetchAsync() {
	return { type: userTypes.USER_FETCH_ASYNC };
}

function userFetchRequested() {
	return { type: userTypes.USER_FETCH_REQUESTED };
}

function userFetchSucceded() {
	return { type: userTypes.USER_FETCH_SUCCEDED };
}

function userFetchFailed() {
	return { type: userTypes.USER_FETCH_FAILED };
}

export {
	userFetchAsync,
	userFetchRequested,
	userFetchSucceded,
	userFetchFailed,
};
