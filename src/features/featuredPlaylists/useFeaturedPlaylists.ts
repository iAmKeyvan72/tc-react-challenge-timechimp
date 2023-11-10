import endpoints from 'constants/endpoints';
import useApiData from 'hooks/useApiData/useApiData';
import { Playlist } from './types';

const useFeaturedPlaylists = (token: string) => {
  return useApiData<Playlist[]>(
    endpoints.FEATURED_PLAYLISTS,
    token,
    'playlists'
  );
};

export default useFeaturedPlaylists;
