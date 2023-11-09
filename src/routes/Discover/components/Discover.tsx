import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import useCategories from 'features/categories/useCategories';
import useNewReleases from 'features/newReleases/useNewReleases';
import useFeaturedPlaylists from 'features/featuredPlaylists/useFeaturedPlaylists';

type Props = {
  token: string;
};

const Discover: React.FC<Props> = ({ token }) => {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  const {
    loading: loadNewReleases,
    error: errorNewReleases,
    newReleases: newReleasesData,
    fetchNewReleases,
  } = useNewReleases(token);

  const {
    loading: loadPlaylists,
    error: errorPlaylists,
    featuredPlaylists: featuredPlaylistsData,
    fetchFeaturedPlaylists,
  } = useFeaturedPlaylists(token);

  const {
    loading: loadCategories,
    error: errorCategories,
    categories: categoriesData,
    fetchCategories,
  } = useCategories(token);

  useEffect(() => {
    if (token) {
      // Fetch and set data for newReleases, playlists, and categories here
      fetchNewReleases().then((data) => setNewReleases(data));
      fetchFeaturedPlaylists().then((data) => setPlaylists(data));
      fetchCategories().then((data) => setCategories(data));
    }
  }, [token]);

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
