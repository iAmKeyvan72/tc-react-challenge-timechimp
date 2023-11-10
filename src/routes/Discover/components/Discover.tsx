import React, { useEffect } from 'react';

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
    fetchData: fetchNewReleases,
    data: newReleases,
  } = useNewReleases(token);

  const {
    loading: loadFeaturedPlaylists,
    error: errorPlaylists,
    fetchData: fetchFeaturedPlaylists,
    data: featuredPlaylists,
  } = useFeaturedPlaylists(token);

  const {
    loading: loadCategories,
    error: errorCategories,
    fetchData: fetchCategories,
    data: categories,
  } = useCategories(token);

  useEffect(() => {
    if (token) {
      fetchNewReleases();
      fetchFeaturedPlaylists();
      fetchCategories();
    }
  }, [token, fetchCategories, fetchNewReleases, fetchFeaturedPlaylists]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
        loading={loadNewReleases}
        error={errorNewReleases?.message}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={featuredPlaylists}
        loading={loadFeaturedPlaylists}
        error={errorPlaylists?.message}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
        loading={loadCategories}
        error={errorCategories?.message}
      />
    </div>
  );
};

export default Discover;
