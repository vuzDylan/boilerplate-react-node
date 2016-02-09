import { createStore } from 'redux';
import reducer from './reducers';

//option secound arg init state
const store = createStore(reducer); 
export default store;
