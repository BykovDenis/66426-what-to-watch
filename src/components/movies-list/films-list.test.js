import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MovieList from './index.jsx';

describe(`MovieList correctly renders after relaunch`, () => {
  const props = {
    onPlayMovie: jest.fn(),
    moviesList: [
      {
        id: 0,
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        sourceURL: `movie-page.html`,
        img: {
          width: 280,
          height: 175,
          fileName: `fantastic-beasts-the-crimes-of-grindelwald`,
          extension: `jpg`,
        },
      },
      {
        id: 1,
        name: `Bohemian Rhapsody`,
        sourceURL: `movie-page.html`,
        img: {
          width: 280,
          height: 175,
          fileName: `bohemian-rhapsody`,
          extension: `jpg`,
        },
      },
      {
        id: 2,
        name: `Macbeth`,
        sourceURL: `movie-page.html`,
        img: {
          width: 280,
          height: 175,
          fileName: `macbeth`,
          extension: `jpg`,
        },
      },
      {
        id: 3,
        name: `Aviator`,
        sourceURL: `movie-page.html`,
        img: {
          width: 280,
          height: 175,
          fileName: `aviator`,
          extension: `jpg`,
        },
      },
      {
        id: 4,
        name: `We need to talk about Kevin`,
        sourceURL: `movie-page.html`,
        img: {
          width: 280,
          height: 175,
          fileName: `we-need-to-talk-about-kevin`,
          extension: `jpg`,
        },
      },
    ],
  };

  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/movie/0']}>
        <MovieList {...props} />
      </MemoryRouter>
    )
    .toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
