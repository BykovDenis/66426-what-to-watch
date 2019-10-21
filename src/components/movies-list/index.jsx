import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/index.jsx';

const MoviesList = ({ moviesList, onPlayMovie }) => {
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
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      sourceURL: PropTypes.string.isRequired,
      img: PropTypes.shape({
        fileName: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
      }),
    })
  ).isRequired,
  onPlayMovie: PropTypes.func,
};

export default MoviesList;
