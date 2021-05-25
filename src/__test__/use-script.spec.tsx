import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useScript } from '../use-script';

function TestComponent() {
  useScript('./a.js');

  return null;
}

test('Load script', () => {
  render(<TestComponent />);

  const scripts = document.querySelectorAll('script[src="./a.js"]');

  expect(scripts.length).toEqual(1);
});

test('Load same script once', () => {
  render(
    <div>
      <TestComponent />
      <TestComponent />
    </div>,
  );

  const scripts = document.querySelectorAll('script[src="./a.js"]');

  expect(scripts.length).toEqual(1);
});

test('Should unload script', () => {
  const { unmount } = render(<TestComponent />);

  unmount();

  const scripts = document.querySelectorAll('script[src="./a.js"]');

  expect(scripts.length).toEqual(0);
});
