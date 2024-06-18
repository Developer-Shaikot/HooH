import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sidebar: false,
	expand: true,
};

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		open: (state) => {
			state.sidebar = true;
		},
		toggle: (state) => {
			state.sidebar = !state.sidebar;
		},
		close: (state) => {
			state.sidebar = false;
		},
		expand: (state) => {
			state.expand = true;
		},
		unExpand: (state) => {
			state.expand = false;
		},
	},
});

export const sidebarStatus = (state) => state.drawer?.sidebar;
export const sidebarExpandStatus = (state) => state.drawer?.expand;

export const { open, toggle, close, expand, unExpand } = drawerSlice.actions;

export default drawerSlice.reducer;
