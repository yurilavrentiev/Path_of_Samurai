import React from "react";
import Post from "../Post/Post";
import styles from "./MyPosts.module.css";



const MyPosts = ({ onTextChange, posts, newPostText, addPost }) => {
  let postsElements = posts.map((post) => (
    <Post key={post.id} massage={post.massage} />
  ));
  
  const handleAddPost = () => {
    addPost();
  };

  const handleOnChange = (event) => {
    const text = event.target.value;
    onTextChange(text);
  }

  return (
    <div className={styles.postsBlok}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
          value={newPostText}
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
