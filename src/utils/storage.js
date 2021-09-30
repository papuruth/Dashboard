const storageKeys = {
  userData: 'userData',
};

export const storage = {
  saveUserData: (data) => localStorage.setItem(storageKeys.userData, JSON.stringify(data)),
  getUserData: () => localStorage.getItem(storageKeys.userData),
  clearStorage: () => localStorage.clear()
};
