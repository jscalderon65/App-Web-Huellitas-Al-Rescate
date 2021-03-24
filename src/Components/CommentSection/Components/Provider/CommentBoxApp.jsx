import React from "react";
import { CommentBoxContainer } from "../index";
import { Provider } from "react-redux";
import Store from "../../Redux/Store";
const CommentBoxApp = ({ CollectionName, firebase }) => {
  return (
      <Provider store={Store}>
        <CommentBoxContainer
          CollectionName={CollectionName}
          firebase={firebase}
        />
      </Provider>
  );
};

export default CommentBoxApp;
