import useFeaturedPlaylists from './useFeaturedPlaylists';
import useApiData from 'hooks/useApiData/useApiData';
import endpoints from 'constants/endpoints';

jest.mock('hooks/useApiData/useApiData');

describe('useFeaturedPlaylists', () => {
  const token = 'test-token';

  it('should call useApiData with the correct arguments', () => {
    useFeaturedPlaylists(token);

    expect(useApiData).toHaveBeenCalledWith(
      endpoints.FEATURED_PLAYLISTS,
      token,
      'playlists'
    );
  });
});
