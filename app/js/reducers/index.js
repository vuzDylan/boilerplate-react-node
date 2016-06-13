import { combineReducers } from 'redux'
import alerts from './alerts';
import nav from './nav';

const rootReducer = combineReducers({
  alerts,
  nav,
})

export default rootReducer;
