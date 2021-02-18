import React from 'react';
import PostForm from '../PostForm/PostForm';
import { Provider } from '../../state/Provider';


export default function App() {
  return (
    <PostProvider>
    <PostForm />
    <PostList />
  </PostProvider>
  );
};



