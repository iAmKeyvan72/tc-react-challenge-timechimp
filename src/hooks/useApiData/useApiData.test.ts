import { renderHook } from '@testing-library/react-hooks';

import useApiData from './useApiData';
import endpoints from 'constants/endpoints';

describe('useApiData', () => {
  it('should return the data and loading state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData(endpoints.CATEGORIES, 'token', 'categories')
    );

    expect(result.current.).toBe(undefined);
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
  });
});
