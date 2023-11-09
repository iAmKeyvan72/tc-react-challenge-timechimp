import endpoints from 'constants/endpoints';
import { useState } from 'react';

const useNewReleases = (token: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  };
};

export default useNewReleases;
