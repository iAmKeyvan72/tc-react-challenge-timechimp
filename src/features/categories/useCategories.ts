import endpoints from 'constants/endpoints';
import useApiData from 'hooks/useApiData';
import { Category } from './types';

const useCategories = (token: string) => {
  return useApiData<Category[]>(endpoints.CATEGORIES, token, 'categories');
};

export default useCategories;
