import endpoints from 'constants/endpoints';
import useAuth from 'features/auth/useAuth';
import { useState } from 'react';

const useCategories = (code: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const accessToken = useAuth(code);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(endpoints.CATEGORIES, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
    fetchCategories,
  };
};

export default useCategories;
