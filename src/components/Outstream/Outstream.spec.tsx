import React from 'react';
import { render } from '@testing-library/react';
import { Outstream } from '../../index';
import '@testing-library/jest-dom';

test('Outstream', () => {
  render(<Outstream zoneId={4176664} />);
});

test('Outstream should cleanup external dom', () => {
  const { container, unmount } = render(<Outstream zoneId={4176664} />);

  unmount();
  expect(container.querySelectorAll(':not(script)').length).toEqual(0);
});