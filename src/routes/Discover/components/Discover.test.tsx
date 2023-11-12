import { render, screen } from '@testing-library/react';
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
