import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Test Counter Component', () => {
  it('test #1: should renders button and div elements', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', { name: /Add One/i });
    const divElement = screen.getByRole('generic', { name: /countValue/i });

    expect(buttonElement).toBeInTheDocument();
    expect(divElement).toBeInTheDocument();
  });

  it('test #2: should add 1, when clicking on the button', () => {
    render(<Counter />);

    const buttonElement = screen.getByRole('button', { name: /Add One/i });
    const divElement = screen.getByRole('generic', { name: /countValue/i });
    user.click(buttonElement);

    expect(divElement).toHaveTextContent(/Count is 1/i);
  });
});
