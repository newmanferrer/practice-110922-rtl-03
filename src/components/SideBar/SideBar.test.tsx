import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

const items = [
  {
    name: 'Newman',
    href: 'http://newman'
  },
  {
    name: 'Alejandro',
    href: 'http://alejandro'
  }
];

describe('Test SideBar Component', () => {
  it('test #1: should renders two anchor elements', () => {
    render(<SideBar items={items} />);
    const anchorElements = screen.getAllByRole('link');
    expect(anchorElements).toHaveLength(2);
  });

  it('test #2: should render the first anchor whit the name newman', () => {
    render(<SideBar items={items} />);

    const anchorElements = screen.getAllByRole('link');
    const anchorElement = screen.getByRole('link', { name: /newman/i });

    expect(anchorElements[0]).toHaveTextContent(/newman/i);
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute('href', 'http://newman');
  });
});
