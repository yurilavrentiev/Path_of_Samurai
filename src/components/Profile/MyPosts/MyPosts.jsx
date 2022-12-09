import React from "react";
import { addPostActionCreator, updateTextActionCreator } from "../../../Redux/profileReducer";
import Post from "../Post/Post";
import styles from "./MyPosts.module.css";



const MyPosts = ({ state, dispatch }) => {

  let postsElements = state.posts.map((post) => (
    <Post key={post.id} massage={post.massage} />
  ));
  
  const handleAddPost = () => {
    dispatch(addPostActionCreator());
  };

  const handleOnChange = (event) => {
    const text = event.target.value;
    dispatch(updateTextActionCreator(text));
  }

  return (
    <div className={styles.postsBlok}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
          value={state.newPostText}
          onChange={handleOnChange}
          placeholder='Enter your post text...'
          />
        </div>
        <div>
          <button className={styles.btn} onClick={handleAddPost}>
            Add Post
          </button>
        </div>
      </div>
      <div className={styles.postsContainer}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
