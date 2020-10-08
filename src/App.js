import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Post from "./Post";

export default function App() {
  return (
    <Provider store={store}>
      <Post id={11} />
    </Provider>
  );
}
