import useCategories from './useCategories';
import useApiData from 'hooks/useApiData/useApiData';
import endpoints from 'constants/endpoints';

jest.mock('hooks/useApiData/useApiData');

describe('useCategories', () => {
  const token = 'test-token';

  it('should call useApiData with the correct arguments', () => {
    useCategories(token);

    expect(useApiData).toHaveBeenCalledWith(
      endpoints.CATEGORIES,
      token,
      'categories'
    );
  });
});
