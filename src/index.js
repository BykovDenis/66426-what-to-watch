import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index.jsx';

const initialState = {
  filmsList: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Titanic`],
};

const actions = {
  actionPlayFilm: () => {},
};

const init = () => {
  return (<App filmsList={initialState.filmsList} actionPlayFilm={actions.actionPlayFilm} />);
};

ReactDOM.render(init(), document.querySelector(`#root`));
