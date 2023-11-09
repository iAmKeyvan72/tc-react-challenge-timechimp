import { useState } from 'react';

const useFeaturedPlaylists = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return { loading, error };
};

export default useFeaturedPlaylists;
