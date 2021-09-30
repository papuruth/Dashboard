import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import api from '../api';

export const getUsersService = async () => {
  try {
    const {
      API_ENDPOINTS: { getUsers },
    } = GLOBAL_CONSTANTS;
    const { data } = await api.get(getUsers);
    return { response: data };
  } catch (error) {
    return { error };
  }
};