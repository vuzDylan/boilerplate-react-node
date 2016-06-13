'use strict';

export const HIDE_USER_MENU = 'HIDE_USER_MENU';
export const SHOW_USER_MENU = 'SHOW_USER_MENU';
export const HIDE_DRAWER = 'HIDE_DRAWER';
export const SHOW_DRAWER = 'SHOW_DRAWER';

function hideUserMenu() {
  return {
    type: HIDE_USER_MENU,
  };
}

function showUserMenu() {
  return {
    type: SHOW_USER_MENU,
  };
}

function hideDrawer() {
  return {
    type: HIDE_DRAWER,
  };
}

function showDrawer() {
  return {
    type: SHOW_DRAWER,
  };
}

export function toggleDrawer() {
  return (dispatch, getState) => {
    let state = getState().nav;
    if (state.drawer) {
      dispatch(hideDrawer());
    } else {
      dispatch(showDrawer());
    }
  }
}

export function toggleMenu() {
  return (dispatch, getState) => {
    let state = getState().nav;
    if (state.menu) {
      dispatch(hideUserMenu());
    } else {
      dispatch(showUserMenu());
    }
  }
}
