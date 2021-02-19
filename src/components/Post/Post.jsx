import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/Actions';
import CommentForm from '../PostForm/CommentForm';
import Comment from '../comment/Comment';
import { deleteComment } from '../../actions/Comment';


const Post = ({ title, post, Index }) => {
  const dispatch = useDispatch();

  console.log('post', title, post);

  const handleClick = () => {
    dispatch(deletePost(Index));
    dispatch(deleteComment(Index));
  };

  return (
    <div>
      <span>{title}</span>
      <span>Post: {post}</span>
      <button onClick={handleClick}>Delete Post</button> 
      <CommentForm />
      <Comment/>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Index: PropTypes.string.isRequired,
};

export default Post;




