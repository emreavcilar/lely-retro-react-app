import React, { useEffect } from 'react';
import PageHeader from 'components/pageHeader';
import {
  useParams
} from 'react-router-dom';

const ManageTeams = () => {
  const params = useParams()

  // component did mount and unmount
  useEffect(() => {
    // did mount 
    const companyId = params.companyId;
    // fetch data with companyId to get teams in this company

    return () => {
      // unmount 
    }
  }, [])

  return (
    <>
      <PageHeader
        title='Teams'
        data={[{ text: 'team name', value: 'team' }]}
        id="teams"
        onDropDownChange={(val) => console.log('val', val)}
      />
      Manage Teams
    </>
  );
};

export default ManageTeams;