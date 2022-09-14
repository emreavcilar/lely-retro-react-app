import {
  SET_USER_DATA
} from './actionTypes';


const initialState = {
  userData: null
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    // if this action type dispatched in action file with 
    // the payload will be set and view will be re-rendered 
    // if reducer data is used in view. 
    case SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default signInReducer;
