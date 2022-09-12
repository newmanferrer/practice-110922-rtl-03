import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './reduxState';
import { App } from './App';

describe('Test App Component', () => {
  it('test #1: should renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkElement = screen.getByRole('link', { name: /learn react/i });
    expect(linkElement).toBeInTheDocument();
  });
});
