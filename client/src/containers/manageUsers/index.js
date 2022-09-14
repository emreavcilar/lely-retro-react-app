import React, { useEffect } from 'react';
import PageHeader from 'components/pageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCompanies } from './actions';


const ManageUsers = () => {
  const dispatch = useDispatch();
  // you can access any store by useSelector
  const { userData } = useSelector(state => state.signInReducer);
  const { email, username } = userData;
  const { userCompanies } = useSelector(state => state.manageUsersReducer)

  // component did mount and unmount
  useEffect(() => {
    // did mount  
    // parameters get from the signinReducer 
    console.log("did mount")
    dispatch(getUserCompanies(email, username))
    return () => {
      // unmount 
    }
  }, [])


  return (
    <>
      <PageHeader
        title='Manage Users'
        data={userCompanies}
        id="manageUsers"
        onDropDownChange={(val) => console.log('val', val)}
      />
      Manage Users
    </>
  );
};

export default ManageUsers;