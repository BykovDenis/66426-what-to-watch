import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import filmsList from '../../mocks/films';

function FilmDetails(props) {
  const { id } = props.match && props.match.params;

  const filmDetails = filmsList.find(film => parseInt(film.id, 10) === parseInt(id, 10));
  if (filmDetails) {
    const { img } = filmDetails;
    return (
      <Fragment>
        <div className="visually-hidden">
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="add" viewBox="0 0 19 20">
              <title>+</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon
                  id="+"
                  fill="#EEE5B5"
                  points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"
                />
              </g>
            </symbol>
            <symbol id="full-screen" viewBox="0 0 27 27">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
                fill="#FFF9D9"
                fillOpacity="0.7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
                fill="#FFF9D9"
                fillOpacity="0.7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z"
                fill="#FFF9D9"
                fillOpacity="0.7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z"
                fill="#FFF9D9"
                fillOpacity="0.7"
              />
            </symbol>
            <symbol id="in-list" viewBox="0 0 18 14">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
                fill="#EEE5B5"
              />
            </symbol>
            <symbol id="pause" viewBox="0 0 14 21">
              <title>Artboard</title>
              <desc>Created with Sketch.</desc>
              <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon
                  id="Line"
                  fill="#EEE5B5"
                  fillRule="nonzero"
                  points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"
                />
                <polygon
                  id="Line"
                  fill="#EEE5B5"
                  fillRule="nonzero"
                  points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"
                />
              </g>
            </symbol>
            <symbol id="play-s" viewBox="0 0 19 19">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5" />
            </symbol>
          </svg>
        </div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={`../img/${img.fileName}.${img.extension}`} alt={filmDetails.fileName} />
            </div>
            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1"> W </span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3"> W </span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="../img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{filmDetails.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{filmDetails.genre}</span>
                  <span className="movie-card__year">{filmDetails.yearPublish}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">
                    Add review
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={`../img/${img.fileName}.${img.extension}`}
                  alt={filmDetails.filename}
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">
                        Overview
                      </a>
                    </li>
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">
                        Details
                      </a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">Wes Andreson</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value">
                        Bill Murray, <br />
                        Edward Norton, <br />
                        Jude Law, <br />
                        Willem Dafoe, <br />
                        Saoirse Ronan, <br />
                        Tony Revoloru, <br />
                        Tilda Swinton, <br />
                        Tom Wilkinson, <br />
                        Owen Wilkinson, <br />
                        Adrien Brody, <br />
                        Ralph Fiennes, <br />
                        Jeff Goldblum
                      </span>
                    </p>
                  </div>

                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">1h 39m</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">Comedy</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">2014</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              <article className="small-movie-card catalog__movies-card">
                <button className="small-movie-card__play-btn" type="button">
                  Play
                </button>
                <div className="small-movie-card__image">
                  <img
                    src="../img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                    alt="Fantastic Beasts: The Crimes of Grindelwald"
                    width="280"
                    height="175"
                  />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">
                    Fantastic Beasts: The Crimes of Grindelwald
                  </a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <button className="small-movie-card__play-btn" type="button">
                  Play
                </button>
                <div className="small-movie-card__image">
                  <img src="../img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">
                    Bohemian Rhapsody
                  </a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <button className="small-movie-card__play-btn" type="button">
                  Play
                </button>
                <div className="small-movie-card__image">
                  <img src="../img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">
                    Macbeth
                  </a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <button className="small-movie-card__play-btn" type="button">
                  Play
                </button>
                <div className="small-movie-card__image">
                  <img src="../img/aviator.jpg" alt="Aviator" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">
                    Aviator
                  </a>
                </h3>
              </article>
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </Fragment>
    );
  }
  return null;
}

FilmDetails.propTypes = {
  match: PropTypes.object,
};

export default FilmDetails;