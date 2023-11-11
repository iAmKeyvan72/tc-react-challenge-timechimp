import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import DiscoverItem from './DiscoverItem';
import '../styles/_discover-block.scss';
import DiscoverItemSkeleton from './DiscoverItemSkeleton';

type Props = {
  text: string;
  id: string;
  data: { [key: string]: any }[];
  imagesKey?: string;
  loading: boolean;
  error: string | null;
};

const DiscoverBlock: FC<Props> = ({
  text,
  id,
  data,
  imagesKey = 'images',
  loading = false,
  error,
}) => {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      {error ? (
        <div className="discover-block__error">
          <p>{error}</p>
        </div>
      ) : (
        <div className="discover-block__row" id={id}>
          {data.map(({ [imagesKey]: images, name }) => (
            <React.Fragment key={name}>
              {loading ? (
                <DiscoverItemSkeleton />
              ) : (
                <DiscoverItem images={images} name={name} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscoverBlock;

function scrollContainer(
  id: string,
  { isNegative }: { isNegative?: boolean } = {}
) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    if (scrollableContainer) {
      const amount = isNegative
        ? -scrollableContainer.offsetWidth
        : scrollableContainer.offsetWidth;

      scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
    }
  };
}
