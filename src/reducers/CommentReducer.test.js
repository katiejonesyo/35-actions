import { createCommit, deleteComment } from '../actions/Comment';
import CommentReducer from './CommentReducer';

describe('comment reducer', () => {
  it('checks to make sure the user is able to creat a comment', () => {
    const state = {};
    const action = createCommit({
      comment: 'working?',
      postIndex: '1'
    });
    const newState = CommentReducer(state, action);

    expect(newState).toEqual({        comment: ['working?']
   
    
    });
  });
  it('checks to make sure the user is able to delete a commit', () => {
    const state = {
      comment: [{ user: 'Jim2' }]
    };
    const action = deleteComment('Jim2');
    expect(CommentReducer(state, action)).toEqual({ comment: [] });
  });
});


