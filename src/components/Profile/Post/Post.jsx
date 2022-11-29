import React from "react";
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.post}>
    <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' />
    {props.massage}
      </div>
  )
}

export default Post;