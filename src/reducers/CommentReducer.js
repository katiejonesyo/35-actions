import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/Actions';

export default function commentReducer(state = {}, action){

  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state, 
        comment: [action.payload.comment]
      };
  
      
    case DELETE_COMMENT:
      return {
        ...state,
        comment: state.comment.filter(comment => comment.user != action.payload)
      };
    default: return  state;
  } 
}



