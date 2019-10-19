import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import VideoPlayer from './index.jsx';

describe(`VideoPlayer correctly renders after relaunch`, () => {
  const props = {
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    img: {
      fileName: `fantastic-beasts-the-crimes-of-grindelwald`,
      extension: `jpg`,
    },
  };

  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <VideoPlayer {...props} />
      </MemoryRouter>
    )
    .toJSON();

  it(`Component should render`, () => {
    expect(tree).toMatchSnapshot();
  });
});
