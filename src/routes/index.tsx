import React, { useEffect, useState } from 'react';

import Discover from './Discover';
import Login from './Authentication/Login';

const Routes: React.FC = () => {
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((el) => el.startsWith('access_token'))
        ?.split('=')[1]!;

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  return token ? <Discover /> : <Login />;
};

export default Routes;
