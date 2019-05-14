import React from 'react';
import PropTypes from 'prop-types';

function FilmCard(props) {
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button" onClick={props.onPlayFilm}>Play</button>
      <div className="small-movie-card__image">
        <img src={`img/${props.img.fileName}.${props.img.extension}`} alt={`${props.name}`}
          width={props.img.width} height={props.img.height} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={`${props.sourceURL}`}>{props.name}</a>
      </h3>
    </article>
  );
}

FilmCard.defaultProps = {
  width: 280,
  height: 175,
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
  onPlayFilm: PropTypes.func,
}

export default FilmCard;
