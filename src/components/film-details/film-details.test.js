import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import FilmDetails from './index.jsx';

describe(`FilmDetails correctly renders after relaunch`, () => {
  const props = {
    match: {
      params: {
        id: 0,
      },
    },
  };

  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/film/0']}>
        <FilmDetails {...props} />
      </MemoryRouter>
    )
    .toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
