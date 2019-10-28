import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageDetails from './index.jsx';

describe(`MoviePageDetails correctly renders after relaunch`, () => {
  const tree = renderer.create(<MoviePageDetails />).toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
