import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks for Fetching Data
export const fetchMovies = createAsyncThunk(
	"movies/fetchMovies",
	async ({ category, page }) => {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${category}?api_key=c45a857c193f6302f2b5061c3b85e743&page=${page}`
		);
		return { category, page, data: response.data };
	}
);

export const fetchSearchResults = createAsyncThunk(
	"search/fetchSearchResults",
	async (query) => {
		const response = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}`
		);

		return response.data.results;
	}
);

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		popular: { data: [], currentPage: 1, totalPages: 0 },
		upcoming: { data: [], currentPage: 1, totalPages: 0 },
		top_rated: { data: [], currentPage: 1, totalPages: 0 },
		searchResults:[],
		status: "idle",
		error: null,
	},
	reducers: {
		setPage: (state, action) => {
			const { category, page } = action.payload;
			state[category].currentPage = page;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchMovies.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				const { category, page, data } = action.payload;
				state[category].data = data.results;
				state[category].currentPage = page;
				state[category].totalPages = data.total_pages;
				state.status = "succeeded";
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(fetchSearchResults.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchSearchResults.fulfilled, (state, action) => {
				state.searchResults = action.payload;
				state.status = "succeeded";
			})
			.addCase(fetchSearchResults.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setPage } = moviesSlice.actions;
export default moviesSlice.reducer;
