import { appConstants } from './appConstants';

export const setAuthStateAction = (isLoggedIn) => ({
  type: appConstants.SET_AUTH_STATE,
  payload: isLoggedIn,
});

export const setUserListAction = (userData) => ({
  type: appConstants.SET_USER_LIST,
  payload: userData,
});

export const startLoaderAction = (state) => ({
  type: appConstants.SET_LOADER_STATE,
  payload: state,
});

export const toggleDrawerAction = (flag) => ({
  type: appConstants.SET_DRAWER_STATE,
  payload: flag,
});

export const toggleScreenAction = (type) => ({
  type: appConstants.SET_SCREEN_TYPE,
  payload: type,
});
