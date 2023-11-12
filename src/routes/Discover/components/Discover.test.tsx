import { getAllByRole, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Discover from './Discover';
import useCategories from 'features/categories/useCategories';
import useNewReleases from 'features/newReleases/useNewReleases';
import useFeaturedPlaylists from 'features/featuredPlaylists/useFeaturedPlaylists';
import endpoints from 'constants/endpoints';

import mockCategoriesResponse from 'features/categories/mocks.json';
import mockNewReleasesResponse from 'features/newReleases/mocks.json';
import mockUseFeaturedReleasesResponse from 'features/featuredPlaylists/mocks.json';
import { Category } from 'features/categories/types';
import { Album } from 'features/newReleases/types';
import { Playlist } from 'features/featuredPlaylists/types';

jest.mock('features/categories/useCategories');
jest.mock('features/newReleases/useNewReleases');
jest.mock('features/featuredPlaylists/useFeaturedPlaylists');

const mockUseCategories = useCategories as jest.MockedFunction<
  typeof useCategories
>;
const mockUseNewReleases = useNewReleases as jest.MockedFunction<
  typeof useNewReleases
>;
const mockUseFeaturedPlaylists = useFeaturedPlaylists as jest.MockedFunction<
  typeof useFeaturedPlaylists
>;

const server = setupServer(
  rest.get(endpoints.CATEGORIES, (req, res, ctx) => {
    return res(ctx.json(mockCategoriesResponse));
  }),

  rest.get(endpoints.NEW_RELEASES, (req, res, ctx) => {
    return res(ctx.json(mockNewReleasesResponse));
  }),

  rest.get(endpoints.FEATURED_PLAYLISTS, (req, res, ctx) => {
    return res(ctx.json(mockUseFeaturedReleasesResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Discover component', () => {
  it('renders the categories, new releases, and featured playlists', async () => {
    mockUseCategories.mockReturnValue({
      data: mockCategoriesResponse.categories.items as Category[],
      loading: false,
      error: null,
    });

    mockUseNewReleases.mockReturnValue({
      data: mockNewReleasesResponse.albums.items as Album[],
      loading: false,
      error: null,
    });

    mockUseFeaturedPlaylists.mockReturnValue({
      data: mockUseFeaturedReleasesResponse.playlists.items as Playlist[],
      loading: false,
      error: null,
    });

    render(<Discover token="test-token" />);

    const categories = await screen.findByTestId('browse');
    const categoriesList = getAllByRole(categories, 'listitem');
    expect(categoriesList).toHaveLength(20);

    const newReleases = await screen.findByTestId('released');
    const newReleasesList = getAllByRole(newReleases, 'listitem');
    expect(newReleasesList).toHaveLength(20);

    const featuredPlaylists = await screen.findByTestId('featured');
    const featuredPlaylistsList = getAllByRole(featuredPlaylists, 'listitem');
    expect(featuredPlaylistsList).toHaveLength(20);
  });

  it('displays an error message if any of the API calls fail', async () => {
    mockUseCategories.mockReturnValue({
      data: [],
      loading: false,
      error: 'Failed to fetch categories',
    });

    mockUseNewReleases.mockReturnValue({
      data: [],
      loading: false,
      error: 'Failed to fetch new releases',
    });

    mockUseFeaturedPlaylists.mockReturnValue({
      data: [],
      loading: false,
      error: 'Failed to fetch featured playlists',
    });

    render(<Discover token="test-token" />);

    const categoriesError = await screen.findByText(
      'Failed to fetch categories'
    );
    const newReleasesError = await screen.findByText(
      'Failed to fetch new releases'
    );
    const featuredPlaylistsError = await screen.findByText(
      'Failed to fetch featured playlists'
    );
    expect(categoriesError).toBeInTheDocument();
    expect(newReleasesError).toBeInTheDocument();
    expect(featuredPlaylistsError).toBeInTheDocument();
  });

  it('displays a loading spinner while the API calls are in progress', async () => {
    mockUseCategories.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    mockUseNewReleases.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    mockUseFeaturedPlaylists.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    render(<Discover token="test-token" />);

    const loadingSkeletonImage = await screen.findByTestId(
      'skeleton-item-image'
    );
    const loadingSkeletonTitle = await screen.findByTestId(
      'skeleton-item-title'
    );
    expect(loadingSkeletonImage).toBeInTheDocument();
    expect(loadingSkeletonTitle).toBeInTheDocument();
  });
});
