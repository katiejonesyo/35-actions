import { createCommit, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './Comment';

describe('comment action for creating a commit', () => {
  it('creates a comment', () => {
    const action = createCommit({
      comment: 'hiiiiii'
    });
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload:{ comment: 'hiiiiii' }
    });
  });

  it('deletes a comment from the user', () => {
    const action = deleteComment({
      user: 'Kt'
    });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { user: 'Kt' }
    });
  });
});


