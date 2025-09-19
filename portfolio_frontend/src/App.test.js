import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title from sample resume', async () => {
  render(<App />);
  const headerEl = await screen.findByRole('banner');
  expect(headerEl).toBeInTheDocument();
});
