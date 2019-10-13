import React from 'react';
import PropTypes from 'prop-types';

function FilmCard(props) {
  const { img, name, sourceURL } = props;
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
        <a className="small-movie-card__link" href={`${sourceURL}`}>
          {name}
        </a>
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
