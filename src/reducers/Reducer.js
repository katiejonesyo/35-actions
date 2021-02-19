import { CREATE_POST, DELETE_POST } from '../actions/Actions';


export const intialState = {
  post: []
};

export default function Reducer(state = intialState, action) {
  switch(action.type){
    case CREATE_POST:
      return {
        ...state,
        post: [...state.post, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        post: state.post.filter(post => post.title !== action.payload)
      };   
    default:
      return state;
  }
}



