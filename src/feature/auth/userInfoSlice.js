import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userInfo: {},
};

export const userInfoSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		currentUser: (state) => {
			return state.userInfo;
		},
	},
});

export const userInfoStatus = (state) => state.user.userInfo;

export const { currentUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
