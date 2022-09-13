import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { useAPI } from './useAPI';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
    return res(
      ctx.delay(300),
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

describe('Test useAPI Hook', () => {
  it('test #1: should render loader', async () => {
    const { result } = renderHook(() => useAPI());
    expect(result.current.isLoading).toBe(true);
  });

  it('test #2: should no render loader', async () => {
    const { result, waitForValueToChange } = renderHook(() => useAPI());
    await waitForValueToChange(() => result.current.isLoading);
    expect(result.current.isLoading).toBe(false);
  });

  it('test #3: should render loader and then disappear', async () => {
    const { result, waitForValueToChange } = renderHook(() => useAPI());

    expect(result.current.isLoading).toBe(true);
    await waitForValueToChange(() => result.current.isLoading);
    expect(result.current.isLoading).toBe(false);
  });

  it('test #4: should get data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAPI());

    await waitForNextUpdate();
    expect(result.current.data).toHaveLength(2);
  });

  it('test #5: should data contain the user "Leanne Graham"', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAPI());

    await waitForNextUpdate();
    expect(result.current.data[0].name).toEqual('Leanne Graham');
  });

  it('test #6: should data contain the user "Ervin Howell"', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAPI());

    await waitForNextUpdate();
    expect(result.current.data[1].name).toEqual('Ervin Howell');
  });

  it('test #7: should show error message "Error code: 404"', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
        return res(ctx.delay(400), ctx.status(404));
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useAPI());

    await waitForNextUpdate();
    expect(result.current.error.hasError).toBe(true);
    expect(result.current.error.message).toEqual('Error code: 404');
  });
});
