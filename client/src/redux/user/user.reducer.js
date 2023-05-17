import { userTypes } from './user.types';

const initialState = {
	credentials: null,
	token: null,
	isLoading: false,
	error: null,
};

function userReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case userTypes.USER_FETCH_REQUESTED:
			return {
				...state,
				isLoading: true,
			};
		case userTypes.USER_FETCH_SUCCEDED:
			return {
				...state,
				credentials: payload.credentials,
				token: payload.token,
				isLoading: false,
			};
		case userTypes.USER_FETCH_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		case userTypes.USER_DISCONNECTED:
			return {
				...state,
				credentials: null,
				token: null,
			};
		default:
			return state;
	}
}

export default userReducer;
