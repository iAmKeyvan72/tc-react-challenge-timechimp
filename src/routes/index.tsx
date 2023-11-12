import React, { useContext } from 'react';

import Discover from './Discover';
import Login from './Login';
import { AuthContext } from 'contexts/AuthContext';

const Routes: React.FC = () => {
  const token = useContext(AuthContext);

  return token ? <Discover /> : <Login />;
};

export default Routes;
