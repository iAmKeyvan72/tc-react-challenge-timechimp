import { useState } from 'react';

const useNewReleases = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return { loading, error };
};

export default useNewReleases;
