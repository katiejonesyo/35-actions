import React from 'react';
import { useSelector } from 'react-redux';
import { getComment } from '../../selectors/CommentSelectors';
import Comment from './Comment';
import Post from '../Post/Post';

const CommentList = () => {

  const comment = useSelector(getComment);

  const commentElements = comment.map((Post, i) => (
    <li key={i}>
      <Comment />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>

  );
};
export default CommentList;




