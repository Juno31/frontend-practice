import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import App from '../../App';

test('rendering test', () => {
  render(<App />);
  const linkElement = document.getElementById('Juno31');
  expect(linkElement).toBeInTheDocument();
});
