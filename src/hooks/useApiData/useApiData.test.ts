import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook } from '@testing-library/react-hooks';

import useApiData from './useApiData';

const mockData = {
  categories: {
    items: [
      {
        id: '1',
        name: 'Category 1',
        icons: [{ url: 'https://example.com/image1.png' }],
      },
      {
        id: '2',
        name: 'Category 2',
        icons: [{ url: 'https://example.com/image2.png' }],
      },
    ],
  },
};

const server = setupServer(
  rest.get('/api/categories', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useApiData', () => {
  it('should return loading state initially', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData('/api/categories', 'categories')
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();
  });

  it('should return data when request is successful', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData('/api/categories', 'categories')
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual(mockData.categories.items);
  });

  it('should return error when request fails', async () => {
    server.use(
      rest.get('/api/categories', (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            status: 500,
            message: 'Internal Server Error',
          })
        );
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData('/api/categories', 'categories')
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual('Internal Server Error');
    expect(result.current.data).toEqual([]);
  });

  it('should return error when request fails with 401', async () => {
    server.use(
      rest.get('/api/categories', (req, res, ctx) => {
        return res(
          ctx.status(401),
          ctx.json({
            status: 401,
            message: 'Unauthorized',
          })
        );
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData('/api/categories', 'categories')
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual('Unauthorized');
    expect(result.current.data).toEqual([]);
  });
});
