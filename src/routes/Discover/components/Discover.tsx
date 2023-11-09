import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

const Discover: React.FC = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  // Simulate data fetching and setting the state
  useEffect(() => {
    // Fetch and set data for newReleases, playlists, and categories here
    // Example: fetchNewReleases().then(data => setNewReleases(data));
    // Example: fetchPlaylists().then(data => setPlaylists(data));
    // Example: fetchCategories().then(data => setCategories(data));
  }, []);

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
