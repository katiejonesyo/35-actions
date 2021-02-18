import { createPost, deletePost } from '../actions/Actions';
import { reducer } from './Reducer';

describe('post', () => {
  it('makes a post', () => {
    const state = {
      posts: []
    };

    const action = createPost({
      title: 'Post',
      body: 'body'
    });

    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({
      posts: [{
        title: 'Post',
        body: 'body'
      }]
    });
  });

  it('deletes a post', () => {
    const state = {
      posts: [{
        title: 'Post',
        body: 'body'
      }]
    };

    const action = deletePost('body');
    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({ posts: [] });
  });
});






