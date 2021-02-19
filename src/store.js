
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { initialState } from './reducers/Reducer';

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;


