import { useEffect, useState } from 'react';

type ApiError = {
  status: number;
  message: string;
};

type ApiDataHook<T> = {
  loading: boolean;
  error: string | null;
  data: T[];
};

const useApiData = <T>(
  endpoint: string,
  token: string,
  dataKey: 'categories' | 'albums' | 'playlists'
): ApiDataHook<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('***********************');
        console.log('[useApiData] response: ', response);

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
      } catch (error: any) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        setError((error as ApiError).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataKey, endpoint, token]);

  return {
    loading,
    error,
    data,
  };
};

export default useApiData;
