const FavoriteMovie = ({
  title,
  poster,
  year,
}: {
  title: string;
  poster: string;
  year: string;
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt='' />
      <p>{year}</p>
    </div>
  );
};

export default FavoriteMovie;
