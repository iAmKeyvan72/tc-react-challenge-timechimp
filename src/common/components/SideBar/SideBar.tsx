import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';

type Props = {
  selected?: boolean;
};

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', {
          selected: true,
        })}
        {renderSideBarOption('/search', faSearch, 'Search')}
        {renderSideBarOption('/favourites', faHeart, 'Favourites')}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
        {renderSideBarOption('/charts', faStream, 'Charts')}
      </div>
    </div>
  );
};

export default SideBar;

function renderSideBarOption(
  link: string,
  icon: IconDefinition,
  text: string,
  { selected = false }: Props = {}
): JSX.Element {
  return (
    <div
      className={cx('sidebar__option', {
        'sidebar__option--selected': selected,
      })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
}
