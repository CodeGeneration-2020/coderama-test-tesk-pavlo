import { useSelector } from 'react-redux';
import { IMovie } from '../../common/types';
import FavoriteMovie from '../../components/favoriteMovie';

const FavoriteMoviesScreen = () => {
  const favoriteMovies = useSelector(
    (state: IMovie) => state.movies.favoriteMovies,
  );

  return (
    <div>
      {favoriteMovies.map((item: IMovie) => (
        <FavoriteMovie
          key={item.Title}
          poster={item.Poster}
          title={item.Title}
          year={item.Year}
        />
      ))}
    </div>
  );
};

export default FavoriteMoviesScreen;
