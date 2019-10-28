import React, { useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/index.jsx';

function MovieCard(props) {
  const { img, name, id } = props;
  const [isMoviePreviewEnable, setMoviePreviewEnable] = useState(false);
  const isHoverRef = useRef(false);
  let timer;

  const setHoverMouseEnter = () => {
    if (isHoverRef.current) {
      setMoviePreviewEnable(true);
    }
  };

  const onMouseEnter = () => {
    isHoverRef.current = true;
    timer = setTimeout(setHoverMouseEnter, 1000);
  };

  const onMouseLeave = () => {
    clearTimeout(timer);
    isHoverRef.current = false;
    setMoviePreviewEnable(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isMoviePreviewEnable && <VideoPlayer preview={props.preview} img={props.img} />}
      {!isMoviePreviewEnable && (
        <Fragment>
          <button className="small-movie-card__play-btn" type="button" onClick={props.onPlayMovie}>
            Play
          </button>
          <div className="small-movie-card__image">
            {img && (
              <img src={`img/${img.fileName}.${img.extension}`} alt={`${name}`} width={img.width} height={img.height} />
            )}
          </div>
          <h3 className="small-movie-card__title">
            <Link className="small-movie-card__link" to={`movie/${id}`}>
              {name}
            </Link>
          </h3>
        </Fragment>
      )}
    </article>
  );
}

MovieCard.defaultProps = {
  img: {
    width: 280,
    height: 175,
  },
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sourceURL: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  img: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  onPlayMovie: PropTypes.func.isRequired,
};

export default MovieCard;
