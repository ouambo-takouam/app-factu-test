import { all, call } from 'redux-saga/effects';
import userSaga from './user/user.sagas';
import dataSaga from './data/data.sagas';

export default function* rootSaga() {
	yield all([call(userSaga), call(dataSaga)]);
}
