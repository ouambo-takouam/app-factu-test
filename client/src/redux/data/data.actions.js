import { dataTypes } from './data.types';

function dataFetchAsync(payload) {
	return { type: dataTypes.DATA_FETCH_ASYNC, payload };
}

function dataFetchRequested() {
	return { type: dataTypes.DATA_FETCH_REQUESTED };
}

function dataFetchSucceded(payload) {
	return { type: dataTypes.DATA_FETCH_SUCCEDED, payload };
}

function dataFetchFailed(payload) {
	return { type: dataTypes.DATA_FETCH_FAILED, payload };
}

function dataAddItem(payload) {
	return { type: dataTypes.DATA_ADD_ITEM, payload };
}

export {
	dataFetchAsync,
	dataFetchRequested,
	dataFetchSucceded,
	dataFetchFailed,
	dataAddItem,
};
