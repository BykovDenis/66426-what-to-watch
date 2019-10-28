import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageOverview from './index.jsx';

describe(`MoviePageDetails correctly renders after relaunch`, () => {
  const tree = renderer.create(<MoviePageOverview />).toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
