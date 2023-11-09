import endpoints from 'constants/endpoints';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { useState } from 'react';
import { setNewReleases } from './reducer';

const useNewReleases = (token: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const newReleases = useAppSelector((state) => state.newReleases);

  const dispatch = useAppDispatch();

  const fetchNewReleases = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(endpoints.NEW_RELEASES, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setNewReleases(data.albums.items));
        return data.albums.items;
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
    fetchNewReleases,
    newReleases,
  };
};

export default useNewReleases;
