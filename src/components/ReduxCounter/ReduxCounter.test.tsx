import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../reduxState';
import { ReduxCounter } from './ReduxCounter';

describe('Test ReduxCounter Component', () => {
  it('test #1: should renders button decrement', () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );

    const buttonElement = screen.getByRole('button', { name: /Decrement/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Decrement/i);
  });

  it('test #2: should renders span element', () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );

    const spanElement = screen.getByRole('generic', { name: /spanCounter/i });
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent(/Counter: 0/i);
  });

  it('test #3: should renders button increment', () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );

    const buttonElement = screen.getByRole('button', { name: /Increment/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Increment/i);
  });

  it('test #4: should increment counter when the button increment is clicked', () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );

    const spanElement = screen.getByRole('generic', { name: /spanCounter/i });
    const buttonElement = screen.getByRole('button', { name: /Increment/i });

    user.click(buttonElement);

    expect(spanElement).toHaveTextContent(/Counter: 1/i);
  });

  it('test #5: should decrement counter when the button decrement is clicked', () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );

    const spanElement = screen.getByRole('generic', { name: /spanCounter/i });
    const buttonElement = screen.getByRole('button', { name: /Decrement/i });

    user.click(buttonElement);

    expect(spanElement).toHaveTextContent(/Counter: 0/i);
  });
});
