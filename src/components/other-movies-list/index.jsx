import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/index.jsx';

function OtherMoviesList(props) {
  const { moviesList, onPlayMovie } = props;
  return (
    <Fragment>
      {moviesList &&
        moviesList.length &&
        moviesList.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.name}
            img={movie.img}
            preview={movie.preview}
            onPlayMovie={onPlayMovie}
            sourceURL={movie.sourceURL}
          />
        ))}
    </Fragment>
  );
}

OtherMoviesList.defaultProps = {
  moviesList: [],
  onPlayMovie: () => {},
};

OtherMoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  onPlayMovie: PropTypes.func.isRequired,
};

export default OtherMoviesList;
