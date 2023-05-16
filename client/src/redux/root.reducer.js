import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/user.reducer';

/** Here we will combine differents reducers to manage data for our app */
const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
