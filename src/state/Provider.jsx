import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducer';

const PostContext = createContext(null);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      { children }
    </PostContext.Provider>
  );
};

export const useSelector = selector => {
  const { state } = useContext(PostContext);

  return selector(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(PostContext);

  return dispatch;
};



//EXTRA DAN LINES 

