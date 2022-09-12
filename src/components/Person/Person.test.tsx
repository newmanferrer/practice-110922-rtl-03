import { render, screen } from '@testing-library/react';
import { Person } from './Person';

describe('Test Person Component', () => {
  it('test #1: should renders a name', () => {
    render(<Person name='Alejandro' />);

    const name = screen.getByText(/name is alejandro/i);
    expect(name).toBeInTheDocument();
  });

  it('test #2: should renders a name in a div element', () => {
    render(<Person name='Alejandro' />);

    const divElement = screen.getByRole('generic', { name: /nameContainer/i });
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent(/name is alejandro/i);
    expect(divElement).toHaveAttribute('aria-label', 'nameContainer');
  });
});
