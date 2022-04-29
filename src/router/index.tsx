import { useMemo } from "react";
import { Route, Routes } from "react-router";

import FavoriteMoviesScreen from "../containers/favoriteMovies";
import MovieDetailsScreen from "../containers/movieDetails";
import SearchScreen from "../containers/searchMovie";

const RouterComponent = () => {
  const screens = useMemo(
    () => (
      <>
        <Route path='/' element={<SearchScreen />} />
        <Route path='/movies/:movieId' element={<MovieDetailsScreen />} />
        <Route path='/favorite-movies' element={<FavoriteMoviesScreen />} />
      </>
    ),
    []
  );
  return (
    <div>
      <Routes>{screens}</Routes>
    </div>
  );
};

export default RouterComponent;
