import { dataTypes } from './data.types';

const initialState = {
	customers: [],
	invoices: [],
	isLoading: false,
	error: null,
};

// payload: {type: 'invoices', value: []}

function dataReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case dataTypes.DATA_FETCH_REQUESTED:
			return {
				...state,
				isLoading: true,
			};
		case dataTypes.DATA_FETCH_SUCCEDED:
			return {
				...state,
				[payload.type]: payload.value,
				isLoading: false,
			};
		case dataTypes.DATA_FETCH_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		default:
			return state;
	}
}

export default dataReducer;
