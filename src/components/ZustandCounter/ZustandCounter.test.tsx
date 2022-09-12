import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ZustandCounter } from './ZustandCounter';
import { useStore } from '../../zustandState';

const originalState = useStore.getState();

beforeEach(() => {
  useStore.setState(originalState);
});

describe('Test ReduxCounter Component', () => {
  it('test #1: should renders button decrement', () => {
    render(<ZustandCounter />);

    const buttonElement = screen.getByRole('button', { name: /Decrement/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Decrement/i);
  });

  it('test #2: should renders span element', () => {
    render(<ZustandCounter />);

    const spanElement = screen.getByRole('generic', { name: /spanCounter/i });
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent(/Counter: 0/i);
  });

  it('test #3: should renders button increment', () => {
    render(<ZustandCounter />);

    const buttonElement = screen.getByRole('button', { name: /Increment/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Increment/i);
  });

  it('test #4: should increment counter when the button increment is clicked', () => {
    render(<ZustandCounter />);

    const spanElement = screen.getByRole('generic', { name: /spanCounter/i });
    const buttonElement = screen.getByRole('button', { name: /Increment/i });

    user.click(buttonElement);

    expect(spanElement).toHaveTextContent(/Counter: 1/i);
  });

  it('test #5: should increment again counter when the button increment is clicked', () => {
    render(<ZustandCounter />);

    const spanElement = screen.getByRole('generic', { name: /spanCounter/i });
    const buttonElement = screen.getByRole('button', { name: /Increment/i });

    user.click(buttonElement);

    expect(spanElement).toHaveTextContent(/Counter: 1/i);
  });

  it('test #6: should decrement counter when the button decrement is clicked', () => {
    render(<ZustandCounter />);

    const spanElement = screen.getByRole('generic', { name: /spanCounter/i });
    const buttonElement = screen.getByRole('button', { name: /Decrement/i });

    user.click(buttonElement);
    user.click(buttonElement);

    expect(spanElement).toHaveTextContent(/Counter: -2/i);
  });
});
