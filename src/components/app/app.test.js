import React from 'react';
import renderer from 'react-test-renderer';
import App from './index.jsx';


it(`App correctly renders after relaunch`, () => {

  const initialState = {
    filmsList: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Titanic`]
  };

  const tree = renderer
  .create(<App filmsList={initialState.filmsList} />)
  .toJSON();

  expect(tree).toMatchSnapshot();

});
