import {
  SET_BOARDS_DATA,
  SET_TEAMS_DATA,
} from './actionTypes';


const initialState = {
  homeData: null,
  boardsData: null,
  teamsData: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARDS_DATA: {
      return {
        ...state,
        boardsData: action.payload,
      };
    }
    case SET_TEAMS_DATA: {
      return {
        ...state,
        teamsData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
