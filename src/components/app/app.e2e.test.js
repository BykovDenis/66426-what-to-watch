import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './index.jsx';


Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders after relaunch`, () => {

  const initialState = {
    filmsList: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Titanic`],
  };

  const clickHandler = jest.fn();
  const app = shallow(<App filmsList={initialState.filmsList} actionPlayFilm={clickHandler} />);

  const startButton = app.find(`.small-movie-card__play-btn`);
  startButton.at(0).simulate(`click`, {preventDefault() {}});

});
