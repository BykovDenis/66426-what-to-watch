import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/index.jsx';

const FilmsList = ({ filmsList, onPlayFilm }) => {
  return (
    <Fragment>
      {filmsList &&
        filmsList.length &&
        filmsList.map((film, index) => (
          <FilmCard key={index} id={index} name={film.name} img={film.img} onPlayFilm={onPlayFilm} sourceURL={film.sourceURL} />
        ))}
    </Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(
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
  onPlayFilm: PropTypes.func,
};

export default FilmsList;
