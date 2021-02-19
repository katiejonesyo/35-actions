import { getComment } from './CommentSelectors';

describe('comment selector', () => {
  it('uses the comment selecter', () => {
    const state = {
      comment: [{ comment: 'hey!' }]
    };
    const comment = getComment(state);

    expect(comment).toEqual([{ comment: 'hey!' }]);
  });
});


