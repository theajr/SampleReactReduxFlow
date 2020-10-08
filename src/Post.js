import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPostData } from "./actions";

const Post = ({ getPost, id = 1, post, ...rest }) => {
  useEffect(() => {
    getPost(id);
    return () => {};
  }, [id, getPost]);

  if (post.loading) return <div>Loading...</div>;
  if (post.error)
    return (
      <div>
        Something went wrong
        <code>ERROR CODE:{post.error}</code>
      </div>
    );
  if (post.data) {
    return (
      <div>
        <h5>Post ID: {post.data.id}</h5>
        <b>Post title:&nbsp;</b>
        {post.data.title}
        <br />
        <b>Post body:&nbsp;</b>
        {post.data.body}
      </div>
    );
  }
  return <h1>HII</h1>;
};

const mapStateToProps = (state) => ({
  post: state.post
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(getPostData(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
