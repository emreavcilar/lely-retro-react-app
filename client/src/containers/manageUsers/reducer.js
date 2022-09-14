import {
  SET_USER_COMPANIES
} from './actionTypes';


const initialState = {
  userCompanies: null
};

const manageUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_COMPANIES: {
      return {
        ...state,
        userCompanies: action.payload,
      };
    }
    default:
      return state;
  }
};

export default manageUsersReducer;
