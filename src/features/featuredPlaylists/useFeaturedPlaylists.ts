import endpoints from 'constants/endpoints';
import { useCallback, useState } from 'react';

const useFeaturedPlaylists = (token: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeaturedPlaylists = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(endpoints.FEATURED_PLAYLISTS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.playlists.items;
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
      // setError(error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  return {
    loading,
    error,
    fetchFeaturedPlaylists,
  };
};

export default useFeaturedPlaylists;
