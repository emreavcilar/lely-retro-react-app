
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';
import {
  BOARD_WO_PARAM,
} from 'config/constants/routePaths';
import PageHeader from 'components/pageHeader';
import { Tab, Tabs } from 'react-bootstrap';
import { getBoards } from './actions';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    companyId,
    username,
    userId
  } = useSelector(state => state.signInReducer.userData); // we have company id from login data

  useEffect(() => {
    // fetch data 
    const params = {
      boardId: null,
      projectId: null,
      userId,
      username,
    }

    dispatch(getBoards(params));

    return () => { }
  }, [])


  const navigateToBoard = (boardId) => {
    navigate(`${BOARD_WO_PARAM}/${companyId}/${boardId}`);
  }


  return (
    <>
      <div className='home-container'>
        <PageHeader
          className="mb-2"
        />

        <Tabs
          defaultActiveKey="all"
          fill
        >
          <Tab eventKey="all" title="All Boards">
            All Boards Content
          </Tab>

          <Tab eventKey="starred" title="Starred Boards">
            Starred Content
          </Tab>

          <Tab eventKey="public" title="Public Boards">
            Public Content
          </Tab>
        </Tabs>

        <div
          className='mt-2 cursor-pointer'
          onClick={() => {
            navigateToBoard('12345');
          }}>
          <span>NAVIGATE TO DASHBOARD DETAIL | CLICK ME</span>
        </div>
      </div>
    </>
  );
};

export default Home;