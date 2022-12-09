import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, dispatch }) => {
  return (
    <div className={style.page}>
      <ProfileInfo />
      <MyPosts 
        state={state} 
        dispatch={dispatch}
        />
    </div>
  )
}

export default Profile;