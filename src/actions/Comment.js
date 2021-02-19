export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createComment = ({ comment, postIndex}) => ({
  type: CREATE_COMMENT,
  payload: comment 
});

export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (user) => ({
  type: DELETE_COMMENT,
  payload: user
});

export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT';

export const deleteComments = (index) => ({
  type: DELETE_POST_COMMENT,
  payload: index
});



