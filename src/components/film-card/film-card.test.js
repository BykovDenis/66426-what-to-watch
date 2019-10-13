import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './index.jsx';

describe(`FilmList correctly renders after relaunch`, () => {
  const props = {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    sourceURL: `movie-page.html`,
    img: {
      fileName: `fantastic-beasts-the-crimes-of-grindelwald`,
      extension: `jpg`,
      width: 280,
      height: 175,
    },
    onPlayFilm: jest.fn(),
  };

  const tree = renderer.create(<FilmCard {...props} />).toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
