import useNewReleases from './useNewReleases';
import useApiData from 'hooks/useApiData/useApiData';
import endpoints from 'constants/endpoints';

jest.mock('hooks/useApiData/useApiData');

describe('useNewReleases', () => {
  const token = 'test-token';

  it('should call useApiData with the correct arguments', () => {
    useNewReleases(token);

    expect(useApiData).toHaveBeenCalledWith(
      endpoints.NEW_RELEASES,
      token,
      'albums'
    );
  });
});
