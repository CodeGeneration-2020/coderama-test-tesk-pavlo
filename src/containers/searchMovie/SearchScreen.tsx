import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getMoviesFetch } from "../../redux/movies-state";
import { IMovie } from "../../common/types";

import "./SearchScreen.module.css";

const SearchScreen = () => {
  const [movies, setMovies] = useState<IMovie[] | undefined>();
  const searchRef = useRef<HTMLInputElement | null>(null);
  const moviesSelector = useSelector(
    (state: IMovie) => state.movies.movies.data?.Search
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setMovies(moviesSelector);
  }, [moviesSelector]);

  const handleSubmit = () => {
    dispatch(getMoviesFetch(searchRef.current?.value));
  };

  return (
    <div className='container'>
      <Box
        component='form'
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'
        className='box'
      >
        <TextField
          inputRef={searchRef}
          id='outlined-basic'
          label='Search movie'
          variant='outlined'
        />
        <Button onClick={handleSubmit} variant='contained'>
          Search
        </Button>
      </Box>
      <div>
        {movies?.map((item: IMovie) => (
          <Link
            state={item}
            to={{
              pathname: `/movies/${item.imdbID}`,
            }}
          >
            <h3 className='title'>{item.Title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
