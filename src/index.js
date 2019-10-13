import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js';

const init = () => {
  return <Routes />;
};

ReactDOM.render(init(), document.querySelector(`#root`));
