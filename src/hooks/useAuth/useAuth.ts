import { useState, useEffect } from 'react';
import { getTokenFromHash } from 'utilities/getTokenFromHash';

const useAuth = () => {
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = getTokenFromHash(hash);
      window.location.hash = '';
      window.localStorage.setItem('token', token || '');
    }

    setToken(token);
  }, []);

  return token;
};

export default useAuth;
