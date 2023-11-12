import { render, screen } from '@testing-library/react';
import Discover from './Discover';

describe('Discover component', () => {
  it('renders the categories, new releases, and featured playlists', async () => {
    render(<Discover />);

    const categories = await screen.findByTestId('browse');
    expect(categories).toBeInTheDocument();

    const newReleases = await screen.findByTestId('released');
    expect(newReleases).toBeInTheDocument();

    const featuredPlaylists = await screen.findByTestId('featured');
    expect(featuredPlaylists).toBeInTheDocument();
  });
});
//     });

//     mockUseFeaturedPlaylists.mockReturnValue({
//       data: [],
//       loading: false,
//       error: 'Failed to fetch featured playlists',
//     });

//     render(<Discover token="test-token" />);

//     const categoriesError = await screen.findByText(
//       'Failed to fetch categories'
//     );
//     const newReleasesError = await screen.findByText(
//       'Failed to fetch new releases'
//     );
//     const featuredPlaylistsError = await screen.findByText(
//       'Failed to fetch featured playlists'
//     );
//     expect(categoriesError).toBeInTheDocument();
//     expect(newReleasesError).toBeInTheDocument();
//     expect(featuredPlaylistsError).toBeInTheDocument();
//   });

//   it('displays a loading spinner while the API calls are in progress', async () => {
//     mockUseCategories.mockReturnValue({
//       data: [],
//       loading: true,
//       error: null,
//     });

//     mockUseNewReleases.mockReturnValue({
//       data: [],
//       loading: true,
//       error: null,
//     });

//     mockUseFeaturedPlaylists.mockReturnValue({
//       data: [],
//       loading: true,
//       error: null,
//     });

//     render(<Discover token="test-token" />);

//     const loadingSkeletonImage = await screen.findByTestId(
//       'skeleton-item-image'
//     );
//     const loadingSkeletonTitle = await screen.findByTestId(
//       'skeleton-item-title'
//     );
//     expect(loadingSkeletonImage).toBeInTheDocument();
//     expect(loadingSkeletonTitle).toBeInTheDocument();
//   });
// });
