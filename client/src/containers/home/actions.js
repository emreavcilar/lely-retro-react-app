import { apiServices } from 'serviceProvider';
import {
  SET_BOARDS_DATA,
  SET_TEAMS_DATA
} from './actionTypes';

export const setBoardsData = payload => ({
  type: SET_BOARDS_DATA,
  payload
});

export const getBoards = (params) => dispatch => {
  // fetch data and dispatch action dispatcher

  apiServices.post('/essentials/user/essentials', params)
    .then((res) => {
      if (res.status === 200 && res.data?.user) {
        dispatch(setBoardsData(res.data.user));
      }
    })
    .catch((err) => {
      console.log('err', err)
    })
}

export const setTeamsData = payload => ({
  type: SET_TEAMS_DATA,
  payload
});

export const getTeams = () => {
  // fetch data 
}