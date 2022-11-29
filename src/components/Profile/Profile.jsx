import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.page}>
      <div>
        <img src='https://seemore.org/wp-content/uploads/2018/02/20170621-204231_orig-500x200.jpg' alt=""></img>
      </div>
      <div>
        Ava+description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;