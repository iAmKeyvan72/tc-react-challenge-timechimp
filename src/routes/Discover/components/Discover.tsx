import React, { useState, useEffect } from 'react';

import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import useCategories from 'features/categories/useCategories';
import useNewReleases from 'features/newReleases/useNewReleases';
import useFeaturedPlaylists from 'features/featuredPlaylists/useFeaturedPlaylists';
import { Album } from 'features/newReleases/types';
import { Playlist } from 'features/featuredPlaylists/types';
import { Category } from 'features/categories/types';

type Props = {
  token: string;
};

const Discover: React.FC<Props> = ({ token }) => {
  const [newReleases, setNewReleases] = useState<Album[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const {
    loading: loadNewReleases,
    error: errorNewReleases,
    fetchData: fetchNewReleases,
  } = useNewReleases(token);

  const {
    loading: loadPlaylists,
    error: errorPlaylists,
    fetchData: fetchFeaturedPlaylists,
  } = useFeaturedPlaylists(token);

  const {
    loading: loadCategories,
    error: errorCategories,
    fetchData: fetchCategories,
  } = useCategories(token);

  useEffect(() => {
    if (token) {
      fetchNewReleases().then((data) => setNewReleases(data!));
      fetchFeaturedPlaylists().then((data) => setPlaylists(data!));
      fetchCategories().then((data) => setCategories(data!));
    }
  }, [token, fetchCategories, fetchNewReleases, fetchFeaturedPlaylists]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
