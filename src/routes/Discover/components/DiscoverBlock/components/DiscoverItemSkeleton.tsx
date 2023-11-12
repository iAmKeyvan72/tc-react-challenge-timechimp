import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import '../styles/_discover-item.scss';
import '../styles/_discover-skeleton.scss';

const DiscoverItemSkeleton = () => {
  return (
    <li className="discover-item">
      <Skeleton
        width={150}
        height={150}
        containerTestId="skeleton-item-image"
      />
      <Skeleton
        width={100}
        height={20}
        className="skeleton-item"
        containerTestId="skeleton-item-title"
      />
    </li>
  );
};

export default DiscoverItemSkeleton;
