import { createPost, CREATE_POST, deletePost, DELETE_POST } from './Actions';

describe('post', () => {
  it('makes a CREATE_POST action', () => {
    const action = createPost({
      title: 'Post',
      body: 'body'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'Post',
        body: 'body'
      }
    });
  });

  it('makes a DELETE_POST action', () => {
    const action = deletePost({
      body: 'body'
    });

    expect(action).toEqual({
      type: DELETE_POST,
      payload: {
        body: 'body'
      }
    });
  });
});






