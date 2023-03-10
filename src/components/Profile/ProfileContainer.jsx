import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userAPI } from '../../api/api';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';


const ProfileContainer = (props) => {

  let params = useParams()

  useEffect(() => {

    if (!params.userId) {
      params.userId = 2
    }
    userAPI.getUsersProfile(params.userId)
      .then(response => {
        props.setUserProfile(response.data)
      })
  })
  return (
    <Profile profile={props.profile} />
  )
}


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
