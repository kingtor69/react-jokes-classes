import React from 'react';
import { render } from '@testing-library/react';
import Joke from '../Joke';
import { Joke as StarterJoke } from '../starter-src/Joke';

it('should render without crashing', () => {
  render(Joke);
});

it('should render snapshot', () => {
  const { asFragment } = render();
  expect(asFragment()).toMatchSnapshot();
});

it('should match starter code snapshot', () => {
    const { asFragment } = render(StarterJoke);
    expect(asFragment()).toMatchSnapshot();
});
