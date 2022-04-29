export interface IMovie {
	[x: string]: any;
	Poster: string;
	Title: string;
	Year: string;
	Type: string;
	imdbID: string;
}

export interface IState {
	movies: IMovie[];
	favoriteMovies: IMovie[];
	isLoading: boolean;
	searchTitle: string;
}