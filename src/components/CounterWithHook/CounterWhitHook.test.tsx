import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CounterWhitHook } from './CounterWhitHook';

describe('Test CounterWhitHook Component', () => {
  it('test #1: should renders div "countValue" in the document', () => {
    render(<CounterWhitHook />);

    const divElement = screen.getByRole('generic', { name: /countValue/i });
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent(/^Count is: 0$/);
  });

  it('test #2: should renders button "Add One", in the document', () => {
    render(<CounterWhitHook />);

    const buttonAddOne = screen.getByRole('button', { name: /Add One/i });
    expect(buttonAddOne).toBeInTheDocument();
    expect(buttonAddOne).toHaveAccessibleName(/Add One/i);
  });

  it('test #3: should renders button "Subtract One", in the document', () => {
    render(<CounterWhitHook />);

    const buttonSubtractOne = screen.getByRole('button', { name: /Subtract One/i });
    expect(buttonSubtractOne).toBeInTheDocument();
    expect(buttonSubtractOne).toHaveAccessibleName(/^Subtract One$/);
  });

  it('test #4: should renders button "Reset", in the document', () => {
    render(<CounterWhitHook />);

    const buttonReset = screen.getByRole('button', { name: /Reset/i });
    expect(buttonReset).toBeInTheDocument();
    expect(buttonReset).toHaveAccessibleName(/^Reset$/);
  });

  it('test #5: should add 1, when clicking on the button "Add One"', () => {
    render(<CounterWhitHook />);

    const buttonAddOne = screen.getByRole('button', { name: /Add One/i });
    const divElement = screen.getByRole('generic', { name: /countValue/i });
    user.click(buttonAddOne);

    expect(divElement).toHaveTextContent(/^Count is: 1$/);
  });

  it('test #6: should subtract 1, when clicking on the button "Subtract One"', () => {
    render(<CounterWhitHook />);

    const buttonSubtractOne = screen.getByRole('button', { name: /subtract One/i });
    const divElement = screen.getByRole('generic', { name: /countValue/i });
    user.click(buttonSubtractOne);

    expect(divElement).toHaveTextContent(/^Count is: -1$/);
  });

  it('test #7: should reset to 0, when clicking on the button "Reset"', () => {
    render(<CounterWhitHook />);

    const buttonAddOne = screen.getByRole('button', { name: /^Add One$/ });
    const buttonReset = screen.getByRole('button', { name: /^Reset$/ });
    const divElement = screen.getByRole('generic', { name: /^countValue$/ });

    user.click(buttonAddOne);
    user.click(buttonAddOne);
    user.click(buttonAddOne);
    expect(divElement).toHaveTextContent(/^Count is: 3$/);

    user.click(buttonReset);
    expect(divElement).toHaveTextContent(/^Count is: 0$/);
  });
});
