import { combineReducers } from 'redux';
import homeReducer from 'containers/home/reducer';
import signInReducer from 'containers/signIn/reducer';
import manageUsersReducer from 'containers/manageUsers/reducer';

const reducers = combineReducers({
  homeReducer,
  signInReducer,
  manageUsersReducer,
})

export default reducers;