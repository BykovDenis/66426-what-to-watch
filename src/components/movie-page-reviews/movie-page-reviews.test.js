import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageReviews from './index.jsx';

describe(`MoviePageReviews correctly renders after relaunch`, () => {
  const tree = renderer.create(<MoviePageReviews />).toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
