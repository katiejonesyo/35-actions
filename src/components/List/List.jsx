import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/Selectors';

import Post from '../../components/Post/Post';

export default function List() {
  const posts = useSelector(getPosts);

  const postElements = posts
    .map((post, i) => (
      <li key={post.index}>
        <Post {...post}/>
      </li>
    ));

  return (
    <ul>
      {postElements}
    </ul>
  );
}



