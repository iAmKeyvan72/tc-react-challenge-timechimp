import { createContext, useEffect, useState } from 'react';

import { getTokenFromHash } from 'utilities/getTokenFromHash';

export const AuthContext = createContext<string | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    let token = window.localStorage.getItem('token');

    if (!token) {
      token = getTokenFromHash();
      window.location.hash = '';
      window.localStorage.setItem('token', token || '');
    }

    setToken(token);
  }, []);

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};
