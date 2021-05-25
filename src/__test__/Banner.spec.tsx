import React from 'react';
import { render } from '@testing-library/react';
import { Banner } from '../';
import '@testing-library/jest-dom';

test('Banner', () => {
  render(<Banner zoneId={4176664} />);

  const ins = document.querySelector('ins');
  expect(ins).toBeInTheDocument();
  expect(ins).toBeEmptyDOMElement();
  expect(ins).toHaveClass('adsbyexoclick');
  expect(ins).toHaveAttribute('data-zoneid', '4176664');
});

test('Banner should cleanup external dom', () => {
  const { container, unmount } = render(<Banner zoneId={2915820} />);

  unmount();
  expect(container.querySelectorAll(':not(ins)').length).toEqual(0);
});
