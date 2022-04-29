import { createSlice } from '@reduxjs/toolkit';
import { IState } from '../common/types';

const initialState: IState = {
	movies: [],
	favoriteMovies: [],
	isLoading: false,
	searchTitle: '',
};

export const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		getMoviesFetch: (state, action) => {
			state.isLoading = true;
			state.searchTitle = action.payload;
		},
		getMoviesSucess: (state, action) => {
			state.movies = action.payload;
			state.isLoading = false;
		},
		addFavoriteMovies: (state, action) => {
			state.favoriteMovies = [...state.favoriteMovies, action.payload];
		},
		deleteFavoriteMovies: (state, action) => {
			state.favoriteMovies = state.favoriteMovies.filter(
				({ imdbID }) => imdbID !== action.payload,
			);
		},
		getMoviesFailure: (state) => {
			state.isLoading = false;
		},
	},
});

export const {
	getMoviesFetch,
	getMoviesSucess,
	getMoviesFailure,
	addFavoriteMovies,
	deleteFavoriteMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
