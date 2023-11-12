import DiscoverItemSkeleton from './DiscoverItemSkeleton';

import '../styles/_discover-block.scss';

const DiscoverRowSkeleton = () => {
  return (
    <ul className="discover-block__row">
      <DiscoverItemSkeleton />
      <DiscoverItemSkeleton />
      <DiscoverItemSkeleton />
      <DiscoverItemSkeleton />
    </ul>
  );
};

export default DiscoverRowSkeleton;
