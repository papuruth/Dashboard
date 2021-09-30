import { storage } from '../storage';

const userData = JSON.parse(storage.getUserData());
export const initialState = {
  isLoggedIn: !!userData?.googleId,
  userList: [],
  screenType: 'dashboard',
  primaryLoader: false,
};

export default function appReducer(state, { type, payload }) {
  switch (type) {
    case 'SET_AUTH_STATE':
      return { ...state, isLoggedIn: payload };
    case 'SET_USER_LIST':
      return { ...state, userList: payload };
    case 'SET_SCREEN_TYPE':
      return { ...state, screenType: payload };
    case 'TOGGLE_LOADER':
      return { ...state, primaryLoader: payload };
    default:
      return state;
  }
}
