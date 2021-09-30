import { useReducer } from 'react';
import appReducer from '../appState/appReducer';

export default function useAuthState() {
  const [state, dispatch] = useReducer(appReducer, { isLoggedIn: false });
  return [state, dispatch];
}
