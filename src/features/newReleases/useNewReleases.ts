import endpoints from 'constants/endpoints';
import useApiData from 'hooks/useApiData';
import { Album } from './types';

const useNewReleases = (token: string) => {
  return useApiData<Album[]>(endpoints.NEW_RELEASES, token, 'albums');
};

export default useNewReleases;
