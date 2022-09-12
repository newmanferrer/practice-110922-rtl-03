import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ButtonWrapper } from './ButtonWrapper';

describe('Test ButtonWrapper Component', () => {
  it('test #1: should renders button element', () => {
    render(<ButtonWrapper title='Add Item' />);

    const buttonElement = screen.getByRole('button', { name: /add item/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Add Item/i);
  });

  it('test #2: should handles onClick', () => {
    const mockHandlerClick = jest.fn();
    render(<ButtonWrapper onClick={mockHandlerClick} title='Add Item' />);

    const buttonElement = screen.getByRole('button', { name: /add item/i });
    user.click(buttonElement);
    expect(mockHandlerClick).toHaveBeenCalled();
    expect(mockHandlerClick).toHaveBeenCalledTimes(1);
  });
});
