import endpoints from 'constants/endpoints';
import useApiData from 'hooks/useApiData/useApiData';
import DiscoverBlock from './DiscoverBlock';
import { Playlist } from 'models/types';

const FeaturedPlaylistsBlock = () => {
  const { loading, error, data } = useApiData<Playlist>(
    endpoints.FEATURED_PLAYLISTS,
    'playlists'
  );

  return (
    <DiscoverBlock
      text="FEATURED PLAYLISTS"
      id="featured"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default FeaturedPlaylistsBlock;
