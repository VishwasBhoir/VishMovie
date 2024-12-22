import { configureStore } from "@reduxjs/toolkit";
import movieDataReducer from "./movieDataSlice";

const store = configureStore({
	reducer: {
		// Add reducers here
		MovieData: movieDataReducer,
	},
});

export default store;
