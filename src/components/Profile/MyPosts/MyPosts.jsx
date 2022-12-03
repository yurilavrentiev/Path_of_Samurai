import React from "react";
import Post from "../Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = ({ state, addPost, updatePostText }) => {
  let postsElements = state.posts.map((post) => (
    <Post key={post.id} massage={post.massage} />
  ));
  
  const textArea = React.createRef();

  const handleAddPost = () => {
    addPost();
  };
  const handleOnChange = () => {
    const text = textArea.current.value;
    updatePostText(text);
  }

  return (
    <div className={styles.postsBlok}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea 
          ref={textArea}
          value={state.newPostText}
          onChange={handleOnChange}
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
