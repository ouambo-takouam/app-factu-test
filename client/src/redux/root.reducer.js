import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/user.reducer';

/** Here we will combine differents reducers to manage data for our app */
export default combineReducers({
	user: userReducer,
});
