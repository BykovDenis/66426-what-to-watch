import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import App from './index.jsx';

Enzyme.configure({ adapter: new Adapter() });

it(`App correctly renders after relaunch`, () => {
  const initialState = {
    moviesList: [
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

  const clickHandler = jest.fn();
  const app = mount(
    <MemoryRouter initialEntries={['/']}>
      <App moviesList={initialState.moviesList} actionPlayMovie={clickHandler} />
    </MemoryRouter>
  );

  const startButton = app.find(`.small-movie-card__play-btn`);
  startButton.at(0).simulate(`click`, { preventDefault() {} });
});
