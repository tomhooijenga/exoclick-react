import React from 'react';
import { render } from '@testing-library/react';
import { Banner } from '../components/Banner';
import '@testing-library/jest-dom';

test('Banner', () => {
  render(<Banner zoneId={1} />);

  const ins = document.querySelector('ins');
  expect(ins).toBeInTheDocument();
  expect(ins).toBeEmptyDOMElement();
  expect(ins).toHaveClass('adsbyexoclick');
  expect(ins).toHaveAttribute('data-zoneid', '1');
});