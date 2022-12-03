import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));

export function rerenderEntireTree(state) {
  root.render(
    <BrowserRouter>
      <App 
        state={state} 
        addPost={store.addPost.bind(store)} 
        updatePostText={store.updatePostText.bind(store)} 
      />
    </BrowserRouter>
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

