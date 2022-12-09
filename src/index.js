import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";


const root = ReactDOM.createRoot(document.getElementById("root"));

export function rerenderEntireTree(state) {
  root.render(
    <BrowserRouter>
      <App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>
  );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {rerenderEntireTree(store.getState())});

