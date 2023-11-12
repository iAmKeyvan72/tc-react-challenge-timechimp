import React from 'react';
import '../styles/_discover-item.scss';

type Props = {
  images: { url: string }[];
  name: string;
};

const DiscoverItem: React.FC<Props> = ({ images, name }) => {
  return (
    <li className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className="discover-item__title">{name}</p>
    </li>
  );
};

export default DiscoverItem;
