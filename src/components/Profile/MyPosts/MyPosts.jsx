import React from "react";
import Post from "../Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {

  let postsData = [
    {id: "1", massage: "My firs post!"},
    {id: "2", massage: "Hi! How are you?"},
    {id: "3", massage: "I love dogs! And, maybe 3 people!"},
  ];

  let postsArray = postsData.map(post => <Post key={post.id} massage={post.massage}/>);

  return (
    <div className={styles.postsBlok}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={styles.btn}>Add Post</button>
        </div>
      </div>
      <div className={styles.postsContainer}>
       {postsArray}
      </div>
    </div>
  );
};

export default MyPosts;
