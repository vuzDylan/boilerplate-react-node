import { DISMISS } from '../actions/alerts';
import alertTypes from '../const/alerts';

const initState = {
  alert: null,
  type: alertTypes.INFO,
}

function alert(state, action) {
  switch(action.type) {
    case DISMISS:
      return null
    default:
      return state;
  }
}

function type(state, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default function alerts(state=initState, action) {
  return {
    alert: alert(state.alert, action),
    type: type(state.type, action),
  }
}
