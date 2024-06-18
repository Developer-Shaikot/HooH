import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice.js";
// import drawerReducer from "../feature/drawer/drawerSlice.js";
// import userInfoReducer from "../feature/auth/userInfoSlice.js";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		// drawer: drawerReducer,

		// userInfo: userInfoReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});
