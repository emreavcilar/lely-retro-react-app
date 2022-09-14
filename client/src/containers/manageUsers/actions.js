import { apiServices } from 'serviceProvider';
import { SET_USER_COMPANIES } from './actionTypes';

export const setUserCompanies = payload => ({
  type: SET_USER_COMPANIES,
  payload
});

export const getUserCompanies = (email, username, callback) => dispatch => {
  const params = { email, username };

  apiServices.post('/essentials/user/companies', params)
    .then((res) => {
      if (res.status === 200 && res.data?.userCompanies) {
        dispatch(setUserCompanies(res.data.userCompanies));
      }
    })
    .catch((err) => {
      console.log('err', err)
    })
}