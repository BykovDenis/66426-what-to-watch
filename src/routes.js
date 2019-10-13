import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FilmDetails from './components/film-details/index.jsx';
import App from './components/app/index.jsx';

function Routes() {
  return (
    <Fragment>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/film/:id" component={FilmDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

Routes.propTypes = {
  children: PropTypes.element,
};

export default Routes;
