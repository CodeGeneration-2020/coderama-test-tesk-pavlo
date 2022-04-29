import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovieDetailsScreen.module.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import {
  addFavoriteMovies,
  deleteFavoriteMovies,
} from "../../redux/movies-state";
import { IMovie } from "../../common/types";

const MovieDetailsScreen = () => {
  const location = useLocation().state as IMovie;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const addToFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      dispatch(addFavoriteMovies(location));
    } else {
      dispatch(deleteFavoriteMovies(location.imdbID));
    }
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <img src={location.Poster} alt={location.Title} className='image' />
        <div className='description'>
          <h1>{location.Title}</h1>
          <h3>{location.Year}</h3>
          <div onClick={addToFavorite}>
            {isFavorite ? (
              <Favorite className='icon' />
            ) : (
              <FavoriteBorder className='icon' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsScreen;
