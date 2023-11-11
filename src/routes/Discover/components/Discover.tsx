import React from 'react';

import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import useCategories from 'features/categories/useCategories';
import useNewReleases from 'features/newReleases/useNewReleases';
import useFeaturedPlaylists from 'features/featuredPlaylists/useFeaturedPlaylists';

type Props = {
  token: string;
};

const Discover: React.FC<Props> = ({ token }) => {
  const {
    loading: loadNewReleases,
    error: errorNewReleases,
    data: newReleases,
  } = useNewReleases(token);

  const {
    loading: loadFeaturedPlaylists,
    error: errorPlaylists,
    data: featuredPlaylists,
  } = useFeaturedPlaylists(token);

  const {
    loading: loadCategories,
    error: errorCategories,
    data: categories,
  } = useCategories(token);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
        loading={loadNewReleases}
        error={errorNewReleases}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={featuredPlaylists}
        loading={loadFeaturedPlaylists}
        error={errorPlaylists}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
        loading={loadCategories}
        error={errorCategories}
      />
    </div>
  );
};

export default Discover;
