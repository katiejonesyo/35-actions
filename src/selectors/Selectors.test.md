
import { getPosts } from './Selectors';

describe('post]', () => {
  it('selects the posts from state', () => {
    const state = {
      posts: [{
        title: 'Post',
        body: 'body'
      }]
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{
      title: 'Post',
      body: 'body'
    }]);
  });
});





