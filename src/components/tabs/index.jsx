import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Tabs(props) {
  const { tabActive } = props;

  const overviewStyles = cn({
    'movie-nav__item': true,
    'movie-nav__item--active': !tabActive,
  });

  const overviewDetails = cn({
    'movie-nav__item': true,
    'movie-nav__item--active': tabActive === 1,
  });

  const overviewReviews = cn({
    'movie-nav__item': true,
    'movie-nav__item--active': tabActive === 2,
  });

  const tabActiveChangeHandler = evt => {
    const element = evt.target;
    props.onTabActiveChange(parseInt(element.dataset.name, 10));
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={overviewStyles}>
          <a data-name="0" href="#" className="movie-nav__link" onClick={tabActiveChangeHandler}>
            Overview
          </a>
        </li>
        <li className={overviewDetails}>
          <a data-name="1" href="#" className="movie-nav__link" onClick={tabActiveChangeHandler}>
            Details
          </a>
        </li>
        <li className={overviewReviews}>
          <a data-name="2" href="#" className="movie-nav__link" onClick={tabActiveChangeHandler}>
            Reviews
          </a>
        </li>
      </ul>
    </nav>
  );
}

Tabs.defaultProps = {
  tabActive: 0,
};

Tabs.propTypes = {
  tabActive: PropTypes.number.isRequired,
  onTabActiveChange: PropTypes.func.isRequired,
};

export default Tabs;
