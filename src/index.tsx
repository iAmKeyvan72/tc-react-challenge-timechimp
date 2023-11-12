import React from 'react';
import ReactDOM from 'react-dom';

import Routes from 'routes';
import { AuthProvider } from 'contexts/AuthContext';
import CoreLayout from 'common/layouts/CoreLayout';

import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
