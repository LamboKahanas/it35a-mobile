import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
function expect(baseElement: HTMLElement) {
  return {
    toBeDefined() {
      if (baseElement === undefined || baseElement === null) {
        throw new Error('Expected baseElement to be defined.');
      }
    }
  };
}
