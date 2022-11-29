import React from "react";
import Post from "../Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post massage='My firs post!'/>
      <Post massage='Hi! How are you?'/>
      <Post massage='I love dogs! And, maybe 3 people!'/>
    </div>
  )
}

export default MyPosts