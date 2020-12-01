import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const contentMessage : string = 'Clean React';
test('renders learn react link', () => {
  render(<App message={contentMessage}/>);
  const linkElement = screen.getByText(/Clean React/i);
  expect(linkElement).toBeInTheDocument();
});
