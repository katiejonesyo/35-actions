import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../actions/Comment';
import { getComment } from '../../selectors/CommentSelectors';

const Comment = ({ comment, user }) => {

  const  dispatch = useDispatch();

  console.log(comment, user, 'commment');

  const handleClick = () => {
    dispatch(deleteComment(user));
  };
  return (
    <div>

      <span>comment: {comment}</span> 
      <span>user: {user}</span> 
      <button onClick={handleClick}>Delete Comment</button>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired

};

export default Comment;



