import { storage } from '../storage';
import { appConstants } from './appConstants';

const userData = JSON.parse(storage.getUserData());
export const initialState = {
  isLoggedIn: !!userData?.googleId,
  userList: [],
  screenType: 'dashboard',
  primaryLoader: false,
  mountDrawer: false,
};

export default function appReducer(state, { type, payload }) {
  switch (type) {
    case appConstants.SET_AUTH_STATE:
      return { ...state, isLoggedIn: payload };
    case appConstants.SET_USER_LIST:
      return { ...state, userList: payload };
    case appConstants.SET_SCREEN_TYPE:
      return { ...state, screenType: payload };
    case appConstants.SET_LOADER_STATE:
      return { ...state, primaryLoader: payload };
    case appConstants.SET_DRAWER_STATE:
      return { ...state, mountDrawer: payload };
    default:
      return state;
  }
}
