import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateTextActionCreator,
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (text) => {
      dispatch(updateTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
}
const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
