import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, addPost, updatePostText }) => {
  return (
    <div className={style.page}>
      <ProfileInfo />
      <MyPosts 
        state={state} 
        addPost={addPost} 
        updatePostText={updatePostText}
        />
    </div>
  )
}

export default Profile;