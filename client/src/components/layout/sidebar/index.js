
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  HOME,
  ACTION_TRACKER,
  MANAGE_TEAMS,
  MANAGE_USERS,
  TEAM_HEALTH,
  SETTINGS,
  SIGN_IN,
  SIGN_UP,
  FORGOT_PASSWORD,
  MANAGE_USERS_WO_PARAMS,
  MANAGE_TEAMS_WO_PARAMS
} from 'config/constants/routePaths';
import './index.scss';
import {
  useLocation,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faSuitcase,
  faChartPie,
  faCircleNotch,
  faGear,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons'
import lelyIcon from 'assets/icons/logo-lely.svg';

const Sidebar = () => {
  const location = useLocation();
  const sidebarFreePages = [SIGN_IN, SIGN_UP, FORGOT_PASSWORD];
  const {
    userData
  } = useSelector(state => state.signInReducer); // we have company id from login data

  const toggleMenu = () => {
    //toggle it 
  }

  return (
    <>
      {sidebarFreePages.indexOf(location.pathname) < 0 &&
        <div className='sidebar-container vh-100 bg-white p-3'>

          <span className=''>
            <img alt='lely' src={lelyIcon} width='100' height='100' />
          </span>

          <FontAwesomeIcon icon={faAnglesRight} className='toggle-arrow cursor-pointer' onClick={toggleMenu} />

          <ul className='list-group border-none'>
            <li className='list-group-item'>
              <NavLink to={HOME} className='text-decoration-none'>
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </NavLink>
            </li>
            {userData &&
              <li className='list-group-item'>
                <NavLink to={MANAGE_USERS_WO_PARAMS + '/' + userData.companyId + '/' + userData.projectId} className='text-decoration-none'>
                  <FontAwesomeIcon icon={faUser} />
                  <span>Manage Users</span>
                </NavLink>
              </li>
            }
            {userData &&
              <li className='list-group-item' >
                <NavLink to={MANAGE_TEAMS_WO_PARAMS + '/' + userData.companyId} className='text-decoration-none'>
                  <FontAwesomeIcon icon={faSuitcase} />
                  <span>Teams</span>
                </NavLink>
              </li>
            }
            <li className='list-group-item'>
              <NavLink to={TEAM_HEALTH} className='text-decoration-none'>
                <FontAwesomeIcon icon={faChartPie} />
                <span>Health Check</span>
              </NavLink>
            </li>
            <li className='list-group-item'>
              <NavLink to={ACTION_TRACKER} className='text-decoration-none'>
                <FontAwesomeIcon icon={faCircleNotch} />
                <span>Action Tracker</span>
              </NavLink>
            </li>
            <li className='list-group-item'>
              <NavLink to={SETTINGS} className='text-decoration-none'>
                <FontAwesomeIcon icon={faGear} />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      }

    </>
  );
};

export default Sidebar;
