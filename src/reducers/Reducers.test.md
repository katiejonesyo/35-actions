import { createPost, deletePost } from '../actions/Actions';
import Reducer from './Reducer';

/* eslint-disable max-len */
describe('post reducer functionality', () => {
  it('CREATE_POST', () => {
    const state = {
      post: []
    };
    const action = createPost({
      post: 'Jim'
    });

    const newState = Reducer(state, action);
    expect(newState).toEqual({ post: [{  post: 'Jim' }] });
  });

  it('DELETE_POST', () => {

    const state = {
      post: [{ title: 'heck yea' }]
    };

    const action = deletePost('heck yea');

    expect(Reducer(state, action)).toEqual({
      post: []
    });
  });
});

