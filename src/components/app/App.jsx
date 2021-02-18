import React from 'react';
import PostForm from '../PostForm/PostForm';
import { Provider } from '../../state/Provider';
import List from '../List/List';


export default function App() {
  return (
    <Provider>
    <PostForm />
    <List />
  </Provider>
  );
};





