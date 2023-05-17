import { dataTypes } from './data.types';

const initialState = {
	customers: [],
	invoices: [],
	isLoading: false,
	error: null,
};

// add new entry to state data. It can be customers, invoices, etc...
function addItem(itemToAdd, itemsArray) {
	return [...itemsArray, itemToAdd];
}

function dataReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case dataTypes.DATA_FETCH_REQUESTED:
			return {
				...state,
				isLoading: true,
			};
		// ex: payload: {type: 'invoices', value: []}
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
		// ex: payload: {type: 'customers', value: {}}
		case dataTypes.DATA_ADD_ITEM:
			return {
				...state,
				[payload.type]: addItem(payload.value, state[payload.type]),
			};
		default:
			return state;
	}
}

export default dataReducer;
