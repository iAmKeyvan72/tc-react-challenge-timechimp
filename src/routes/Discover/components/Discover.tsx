import React from 'react';

import '../styles/_discover.scss';

import FeaturedPlaylistsBlock from './FeaturedPlaylists';
import NewReleasesBlock from './NewReleasesBlock';
import CategoriesBlock from './CategoriesBlock';

const Discover: React.FC = () => {
  return (
    <div className="discover" data-testid="discover" role="feed">
      <NewReleasesBlock />
      <FeaturedPlaylistsBlock />
      <CategoriesBlock />
    </div>
  );
};

export default Discover;
