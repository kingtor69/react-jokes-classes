import React from 'react';
import { render } from '@testing-library/react';
import JokeList from '../JokeList';
import { JokeList as StarterJokeList } from '../starter-src/JokeList';

it('should render without crashing', () => {
  render(JokeList);
});

it('should render snapshot', () => {
  const { asFragment } = render();
  expect(asFragment()).toMatchSnapshot();
});

it('should match starter code snapshot', () => {
  const { asFragment } = render(StarterJokeList);
  expect(asFragment()).toMatchSnapshot();
});
