import endpoints from 'constants/endpoints';
import useApiData from 'hooks/useApiData/useApiData';
import DiscoverBlock from './DiscoverBlock';
import { Album } from 'models/types';

const CategoriesBlock = () => {
  const { loading, error, data } = useApiData<Album>(
    endpoints.CATEGORIES,
    'categories'
  );

  return (
    <DiscoverBlock
      text="BROWSE"
      id="browse"
      data={data}
      imagesKey="icons"
      loading={loading}
      error={error}
    />
  );
};

export default CategoriesBlock;
