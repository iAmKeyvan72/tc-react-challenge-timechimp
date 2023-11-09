import { useState, useEffect } from 'react';

const useAuth = (code: string): string | undefined => {
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(
    undefined
  );
  const [expiresIn, setExpiresIn] = useState<number | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAccessToken(data.access_token);
          setRefreshToken(data.refresh_token);
          setExpiresIn(data.expires_in);
          window.history.pushState({}, '', '/');
        } else {
          window.location.href = '/';
        }
      } catch {
        window.location.href = '/';
      }
    })();
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/refresh`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAccessToken(data.access_token);
          setExpiresIn(data.expires_in);
        } else {
          window.location.href = '/';
        }
      } catch {
        window.location.href = '/';
      }
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
