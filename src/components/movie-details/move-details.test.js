import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MovieDetails from './index.jsx';

describe(`MovieDetails correctly renders after relaunch`, () => {
  const props = {
    match: {
      params: {
        id: 0,
      },
    },
  };

  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/movie/0']}>
        <MovieDetails {...props} />
      </MemoryRouter>
    )
    .toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
