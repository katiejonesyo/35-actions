
export const CREATE_POST = 'CREATE_POST';
export const createPost = post => ({
  type: CREATE_POST,
  payload: post
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = index => ({
  type: DELETE_POST,
  payload: index
});



