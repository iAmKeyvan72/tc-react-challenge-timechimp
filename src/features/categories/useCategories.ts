import endpoints from 'constants/endpoints';
import { useState } from 'react';

const useCategories = (token: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(endpoints.CATEGORIES, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.categories.items;
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
