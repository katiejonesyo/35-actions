import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './Comment';

describe('comment action for creating a comment', () => {
  it('creates a comment', () => {
    const action = createComment({
      comment: 'hiiiiii', postIndex: 1
    });
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload:'hiiiiii'
    });
  });

  it('deletes a comment from the user', () => {
    const action = deleteComment({
      index: '1'
    });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { index: '1' }
    });
  });
});


