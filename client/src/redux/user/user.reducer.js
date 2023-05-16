import { userTypes } from './user.types';

const initialState = {
	credentials: null,
	token: null,
};

function userReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case userTypes.userSubscribed:
			return {
				...state,
				credentials: payload.credentials,
				token: payload.token,
			};
		case userTypes.userUnSubscribed:
			return { ...state, credentials: null, token: null };
		default:
			return state;
	}
}

export default userReducer;
