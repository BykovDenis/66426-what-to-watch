import React, { Fragment } from 'react';

function OverviewComponent() {
  return (
    <Fragment>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol viewBox="0 0 19 20">
            <path
              fill="#EEE5B5"
              stroke="none"
              strokeWidth={1}
              fillRule="evenodd"
              d="M10.777832 11.2880859L10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859z"
            />
          </symbol>
          <symbol viewBox="0 0 27 27">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.857 0H16v3.143h7.857V11H27V0h-3.143zM27 23.857V16h-3.143v7.857H16V27h11v-3.143zM0 3.143V11h3.143V3.143H11V0H0v3.143zM3.143 27H11v-3.143H3.143V16H0v11h3.143z"
              fill="#FFF9D9"
              fillOpacity={0.7}
            />
          </symbol>
          <symbol viewBox="0 0 18 14">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.405 5.354l3.777 3.555L15.58 0 18 2.805 6.19 14 0 8.173l2.405-2.82z"
              fill="#EEE5B5"
            />
          </symbol>
          <symbol viewBox="0 0 14 21">
            <g stroke="none" strokeWidth={1} fill="#EEE5B5" fillRule="nonzero">
              <path d="M0 -1.11910481e-13L4 -1.11910481e-13 4 21 0 21z" />
              <path d="M10 -1.11910481e-13L14 -1.11910481e-13 14 21 10 21z" />
            </g>
          </symbol>
          <symbol viewBox="0 0 19 19">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l19 9.5L0 19V0z" fill="#EEE5B5" />
          </symbol>
        </svg>
      </div>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
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
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="movie-nav__item">
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
              <div className="movie-rating">
                <div className="movie-rating__score">8,9</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">240 ratings</span>
                </p>
              </div>
              <div className="movie-card__text">
                <p>
                  In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
                </p>
                <p>
                  Gustave prides himself on providing first-class service to the hotel&apos;s guests, including
                  satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s
                  lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief
                  suspect in her murder.
                </p>
                <p className="movie-card__director">
                  <strong>Director: Wes Andreson</strong>
                </p>
                <p className="movie-card__starring">
                  <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong>
                </p>
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
                  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald"
                  width={280}
                  height={175}
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
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width={280} height={175} />
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
                <img src="img/macbeth.jpg" alt="Macbeth" width={280} height={175} />
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
                <img src="img/aviator.jpg" alt="Aviator" width={280} height={175} />
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

export default OverviewComponent;
