import React from 'react';

import Discover from './Discover';
import Login from './Authentication/Login';
import useAuth from 'features/auth/useAuth';

const Routes: React.FC = () => {
  const token = useAuth();

  return token ? <Discover token={token} /> : <Login />;
};

export default Routes;
