import { createSlice } from "@reduxjs/toolkit";

const currentTheme = localStorage.getItem("theme");

if (!currentTheme) {
	localStorage.setItem("theme", 1);
} else if(currentTheme === "2") {
	document.body.classList.add("dark");
}

const initialState = {
	theme: currentTheme || 1,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		light: (state) => {
			state.theme = 1;

			document.body.classList.remove("dark");
			localStorage.setItem("theme", 1);
		},
		toggle: (state) => {
			state.theme = Number(state.theme) === 1 ? 2 : 1;

			if (state.theme === 2) {
				document.body.classList.add("dark");
			} else {
				document.body.classList.remove("dark");
			}

			localStorage.setItem("theme", state.theme);
		},
		dark: (state) => {
			state.theme = 2;

			document.body.classList.add("dark");
			localStorage.setItem("theme", 2);
		},
		custom: (state) => {
			state.theme = 3;

			document.body.classList.remove("dark");
			localStorage.setItem("theme", 3);
		},
	},
});

export const themeStatus = (state) => state.theme.theme;

export const { light, toggle, custom, dark } = themeSlice.actions;

export default themeSlice.reducer;
