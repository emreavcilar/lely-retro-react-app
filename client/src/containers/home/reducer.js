import {
  SET_HOME_DATA
} from './actionTypes';


const initialState = {
  homeData: null
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_DATA: {
      return {
        ...state,
        homeData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
