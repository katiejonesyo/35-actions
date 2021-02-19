import { combineReducers } from 'redux';
import CommentReducer from './CommentReducer';
import Reducer from './Reducers';

export default combineReducers({
  post: Reducer,
  comment: CommentReducer
});


