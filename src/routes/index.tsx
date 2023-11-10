import React from 'react';

import Discover from './Discover';
import Login from './Login';
import useAuth from 'hooks/useAuth/useAuth';

const Routes: React.FC = () => {
  const token = useAuth();

  return token ? <Discover token={token} /> : <Login />;
};

export default Routes;
