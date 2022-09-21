import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import {
  HOME,
  SIGN_IN,
  SIGN_UP,
  ACTION_TRACKER,
  FORGOT_PASSWORD,
  MANAGE_TEAMS,
  MANAGE_USERS,
  NOT_FOUND_404,
  TEAM_HEALTH,
  SETTINGS,
  BOARD,
} from 'config/constants/routePaths';
// import Loader from 'components/loader';
// import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import Home from 'containers/home';
import SignIn from 'containers/signIn';
import SignUp from 'containers/signUp';
import ActionTracker from 'containers/actionTracker';
import ManageTeams from 'containers/manageTeams';
import ManageUsers from 'containers/manageUsers';
import TeamHealth from 'containers/teamHealth';
import Settings from 'containers/settings';
import ForgotPassword from 'containers/forgotPassword';
import NotFound404 from 'containers/errors/notFound';
import Board from 'containers/board';
import { setUserData } from 'containers/signIn/actions';

// see more detail : https://reactrouter.com/en/v6.3.0/getting-started/installation

const Router = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // component did mount and unmount
  useEffect(() => {
    // did mount 

    // if user exists in localStorage automatically login
    if (localStorage.hasOwnProperty('user_data')) {
      const user = JSON.parse(localStorage.getItem('user_data'));
      // set localStorage data to reducer with setUserData
      dispatch(setUserData(user));

      if (location.pathname) {
        navigate(location.pathname)
      } else {
        navigate(HOME)
      }
    }

    return () => {
      // unmount 
    }
  }, [])

  const RequireAuth = ({ children }) => {
    const user = useSelector(state => state.signInReducer.userData);
    if (!user) {
      return <Navigate to={SIGN_IN} state={{ from: location }} />;
    }
    return children;
  }

  return (
    <>
      {/* 
      {pageInProgress &&
        <Loader fullScreen />
      } */}

      <main className="">
        <section
          className={`content-container d-flex ${location.pathname !== SIGN_IN ? 'full-height' : ''}`}
        >
          <Sidebar />

          <section
            // className="page-container w-100 p-3"
            className={`page-container w-100 ${location.pathname !== SIGN_IN ? 'p-3' : ''}`}
          >
            <Routes>
              <Route exact path={HOME} element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
              />
              <Route path={MANAGE_TEAMS} element={
                <RequireAuth>
                  <ManageTeams />
                </RequireAuth>
              }
              />
              <Route path={ACTION_TRACKER} element={
                <RequireAuth>
                  <ActionTracker />
                </RequireAuth>
              }
              />
              <Route path={MANAGE_USERS} element={
                <RequireAuth>
                  <ManageUsers />
                </RequireAuth>
              }
              />
              <Route path={TEAM_HEALTH} element={
                <RequireAuth>
                  <TeamHealth />
                </RequireAuth>
              }
              />
              <Route path={SETTINGS} element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
              />
              <Route path={BOARD} element={
                <RequireAuth>
                  <Board />
                </RequireAuth>
              }
              />

              <Route path={SIGN_IN} element={<SignIn />} />
              <Route path={SIGN_UP} element={<SignUp />} />
              <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
              <Route path={NOT_FOUND_404} element={<NotFound404 />} />
              <Route element={<NotFound404 />} />
            </Routes>
          </section>
        </section>
      </main>
    </>
  )
}

export default Router;
