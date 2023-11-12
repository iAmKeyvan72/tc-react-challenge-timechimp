import endpoints from 'constants/endpoints';
import useApiData from 'hooks/useApiData/useApiData';
import DiscoverBlock from './DiscoverBlock';
import { Album } from 'models/types';

const NewReleasesBlock = () => {
  const { loading, error, data } = useApiData<Album>(
    endpoints.NEW_RELEASES,
    'albums'
  );

  return (
    <DiscoverBlock
      text="RELEASED THIS WEEK"
      id="released"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default NewReleasesBlock;
