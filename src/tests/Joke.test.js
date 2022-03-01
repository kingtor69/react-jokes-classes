import React from 'react';
import { render } from '@testing-library/react';
import Joke from '../Joke';

it('should render without crashing', () => {
  render(Joke);
});

it('should render snapshot', () => {
  const { asFragment } = render();
  expect(asFragment()).toMatchSnapshot();
});