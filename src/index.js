import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index.jsx';
import filmsList from './mocks/films';

const initialState = {
  filmsList,
};

const actions = {
  actionPlayFilm: () => {},
};

const init = () => {
  return <App filmsList={initialState.filmsList} actionPlayFilm={actions.actionPlayFilm} />;
};

ReactDOM.render(init(), document.querySelector(`#root`));
