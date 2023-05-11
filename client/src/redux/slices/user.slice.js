import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		credentials: null,
		token: null,
	},
	reducers: {
		connect: (state, action) => {
			const { credentials, token } = action.payload;
			state.credentials = credentials;
			state.token = token;
		},
		disconnect: (state) => {
			state.credentials = null;
			state.token = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { connect, disconnect } = userSlice.actions;

export default userSlice.reducer;
