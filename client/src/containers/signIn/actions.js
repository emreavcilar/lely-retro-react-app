import { apiServices } from 'serviceProvider';
import {
  SET_USER_DATA
} from './actionTypes';

export const setUserData = payload => ({
  type: SET_USER_DATA,
  payload
});

export const signIn = (email, password, callback) => dispatch => {
  const params = { email, password };

  // api is called. 
  apiServices.post('/signIn', params)
    .then((res) => {
      if (res.status === 200 && res.data?.user) {
        // 1 - if you use redux you can send the payload to with 
        // related "action type". it will re-rendered if the data
        // refreshes in reducer.
        dispatch(setUserData(res.data.user));
        localStorage.setItem('access_token', res.data.user.token);
        localStorage.setItem('user_data', JSON.stringify(res.data.user))

        // 2 -if you don't use redux you can send response data to view 
        // with a callback action (optional - if you don't use redux)
        if (callback) {
          // you can send response to view like below
          // callback(res.data.user) // you can send whole object or
          callback(true);
        }
      }
    })
    .catch((err) => {
      console.log('err', err)
    })
}

export const signOut = () => dispatch => {
  apiServices.post('/signOut')
    .then((res) => {
      console.log('res', res)
      if (res.status === 200 && res.data?.signOut === true) {
        // clear user in store
        dispatch(setUserData(null));
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_data');
      }
    })
    .catch((err) => {
      console.log('err', err)
    })
}