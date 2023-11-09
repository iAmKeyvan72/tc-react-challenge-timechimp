import React, { ReactNode } from 'react';

import Header from '../components/Header';
import Player from '../components/Player';
import SideBar from '../components/SideBar';

type Props = {
  children: ReactNode;
};

const CoreLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
};

export default CoreLayout;
