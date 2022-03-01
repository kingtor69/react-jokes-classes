import React from 'react';
import { render } from '@testing-library/react';
import JokeList from '../JokeList';

it('should render without crashing', () => {
    render(JokeList);
});

it('should render snapshot', () => {
    const { asFragment } = render();
    expect(asFragment()).toMatchSnapshot();
});