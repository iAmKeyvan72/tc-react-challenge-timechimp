import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import endpoints from 'constants/endpoints';

import CategoriesBlock from './CategoriesBlock';

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
  rest.get(endpoints.CATEGORIES, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CategoriesBlock', () => {
  it('renders the component with the correct text', () => {
    render(<CategoriesBlock />);
    const title = screen.getByRole('heading', { name: 'BROWSE' });
    expect(title).toBeInTheDocument();
  });

  it('renders the category names and images', async () => {
    render(<CategoriesBlock />);
    await waitFor(() => {
      const category1 = screen.getByText('Category 1');
      const category2 = screen.getByText('Category 2');
      expect(category1).toBeInTheDocument();
      expect(category2).toBeInTheDocument();
    });
  });

  it('renders a loading spinner when loading', () => {
    render(<CategoriesBlock />);
    const skeletonImage = screen.getAllByTestId('skeleton-item-image');
    const skeletonText = screen.getAllByTestId('skeleton-item-title');
    expect(skeletonImage).toHaveLength(4);
    expect(skeletonText).toHaveLength(4);
  });

  it('renders an error message when there is an error', async () => {
    server.use(
      rest.get(endpoints.CATEGORIES, (req, res, ctx) => {
        return res(
          ctx.status(401),
          ctx.json({
            status: 401,
            message: 'Unauthorized',
          })
        );
      })
    );

    render(<CategoriesBlock />);

    await waitFor(() => {
      const errorMessage = screen.getByRole('alert');
      expect(errorMessage).toHaveTextContent('Unauthorized');
    });
  });

  it('renders a message when there are no categories', async () => {
    server.use(
      rest.get(endpoints.CATEGORIES, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ categories: { items: [] } }));
      })
    );

    render(<CategoriesBlock />);

    await waitFor(() => {
      const errorMessage = screen.getByRole('alert');
      expect(errorMessage).toHaveTextContent('No categories found');
    });
  });
});
