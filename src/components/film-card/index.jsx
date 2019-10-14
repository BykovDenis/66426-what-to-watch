import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FilmCard(props) {
  const { img, name, id } = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button" onClick={props.onPlayFilm}>
        Play
      </button>
      <div className="small-movie-card__image">
        {img && (
          <img src={`img/${img.fileName}.${img.extension}`} alt={`${name}`} width={img.width} height={img.height} />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`film/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

FilmCard.defaultProps = {
  img: {
    width: 280,
    height: 175,
  },
};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sourceURL: PropTypes.string.isRequired,
  img: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  onPlayFilm: PropTypes.func.isRequired,
};

export default FilmCard;
