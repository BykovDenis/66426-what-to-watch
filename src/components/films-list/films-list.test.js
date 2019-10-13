import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from './index.jsx';

describe(`FilmList correctly renders after relaunch`, () => {
  const props = {
    onPlayFilm: jest.fn(),
    filmsList: [
      {
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

  const tree = renderer.create(<FilmList {...props} />).toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
