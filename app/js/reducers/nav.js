import { SHOW_USER_MENU, SHOW_DRAWER, HIDE_USER_MENU, HIDE_DRAWER } from '../actions/nav';

const initState = {
  drawer: false,
  menu: false,
}

function menu(state, action) {
  switch(action.type) {
    case SHOW_USER_MENU:
      return true;
    case HIDE_USER_MENU:
      return false;
    default:
      return state;
  }
}

function drawer(state, action) {
  switch(action.type) {
    case SHOW_DRAWER:
      return true;
    case HIDE_DRAWER:
      return false;
    default:
      return state;
  }
}

export default function nav(state=initState, action) {
  return {
    menu: menu(state.menu, action),
    drawer: drawer(state.drawer, action),
  };
}
