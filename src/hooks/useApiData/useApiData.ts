import { useCallback, useState } from 'react';

type ApiError = {
  status: number;
  message: string;
};

type ApiDataHook<T> = {
  loading: boolean;
  error: ApiError | null;
  fetchData: () => Promise<T[] | undefined>;
  data: T[];
};

const useApiData = <T>(
  endpoint: string,
  token: string,
  dataKey: 'categories' | 'albums' | 'playlists'
): ApiDataHook<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [data, setData] = useState<T[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      setData(data[dataKey].items as T[]);
      return data[dataKey].items as T[];
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
    data,
    fetchData,
  };
};

export default useApiData;
