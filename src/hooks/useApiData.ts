import { useCallback, useState } from 'react';

type ApiError = {
  status: number;
  message: string;
};

type ApiDataHook<T> = {
  loading: boolean;
  error: ApiError | null;
  fetchData: () => Promise<T | undefined>;
};

const useApiData = <T>(
  endpoint: string,
  token: string,
  dataKey: 'categories' | 'albums' | 'playlists'
): ApiDataHook<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      console.log(token);

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      if (!response.ok) {
        const errorData: ApiError = await response.json();
        const errorMessage = errorData?.message || 'Something went wrong';

        if (response.status === 401) {
          localStorage.removeItem('token');
          window.location.replace('/');
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data[dataKey].items as T;
    } catch (error: any) {
      console.error(`Error fetching data from ${endpoint}:`, error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [endpoint, token, dataKey]);

  return {
    loading,
    error,
    fetchData,
  };
};

export default useApiData;
