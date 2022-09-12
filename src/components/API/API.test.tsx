import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { API } from './API';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496'
            }
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
          }
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618'
            }
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
          }
        }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Test API Component', () => {
  it('test #1: should show loading in the document', async () => {
    render(<API />);
    const loaderElement = await screen.findByRole('generic', { name: /loader/i });
    expect(loaderElement).toBeInTheDocument();
  });

  it('test #2: should renders two div nameContainer elements', async () => {
    render(<API />);
    const divElements = await screen.findAllByRole('generic', { name: /nameContainer/i });
    expect(divElements).toHaveLength(2);
  });

  it('test #3: should show first div nameContainer elements', async () => {
    render(<API />);
    const divElement = await screen.findByRole('generic', { name: /nameContainer-1/i });
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent(/Name is Leanne Graham/i);
  });

  it('test #4: should show div errorContainer elements', async () => {
    render(<API />);
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
        return res(ctx.delay(500), ctx.status(404));
      })
    );

    await waitFor(async () => {
      await screen.findByRole('generic', { name: /errorContainer/i });
    });

    const divElement = await screen.findByRole('generic', { name: /errorContainer/i });
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent(/Error code: 404/i);
  });
});
