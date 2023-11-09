import endpoints from 'constants/endpoints';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { useState } from 'react';
import { setFeaturedPlaylists } from './reducer';

const useFeaturedPlaylists = (token: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const featuredPlaylists = useAppSelector((state) => state.featuredPlaylists);

  const dispatch = useAppDispatch();

  const fetchFeaturedPlaylists = async () => {
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
        dispatch(setFeaturedPlaylists(data.playlists.items));
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
  };

  return {
    loading,
    error,
    fetchFeaturedPlaylists,
    featuredPlaylists,
  };
};

export default useFeaturedPlaylists;
