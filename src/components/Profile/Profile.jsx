import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ store }) => {
  return (
    <div className={style.page}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;