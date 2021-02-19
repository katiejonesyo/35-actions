import { createPost, CREATE_POST, deletePost, DELETE_POST } from './Actions';

describe('post', () => {
  it('makes a CREATE_POST action', () => {
    const action = createPost({
      post: 'hey'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: { post: 'hey' }
    });
  });

  it('deletes a post', () => {
    const action = deletePost({
      index: '1'
    });

    expect(action).toEqual({
      type: DELETE_POST,
      payload: { index: '1'}
    });
  });
});






