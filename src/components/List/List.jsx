import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/Selectors';
import Post from '../Post/Post';

const List = () => {

  const post = useSelector(getPosts);

  const postElements = post.map(post => (
    <li key={post.index}>
      <Post {...post}/>
    </li>
     
  ));

  return (
    <ul>
      {postElements}
    </ul>

  );
};
export default List;


