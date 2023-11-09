import endpoints from 'constants/endpoints';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { useState } from 'react';
import { setCategories } from './reducer';

const useCategories = (token: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const categories = useAppSelector((state) => state.categories);

  const dispatch = useAppDispatch();

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
        dispatch(setCategories(data.categories.items));
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
    categories,
  };
};

export default useCategories;
