import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MovieCard from './index.jsx';

describe(`MovieList correctly renders after relaunch`, () => {
  const props = {
    id: 0,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    sourceURL: `movie-page.html`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    img: {
      fileName: `fantastic-beasts-the-crimes-of-grindelwald`,
      extension: `jpg`,
      width: 280,
      height: 175,
    },
    onPlayMovie: jest.fn(),
  };

  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <MovieCard {...props} />
      </MemoryRouter>
    )
    .toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
