import myImage from '@/assets/images/my.jpg';

export const getUserProfileImage = (src) => {
  return src || myImage;
};

export const refreshTokenSetup = (result) => {
  let refreshTiming = (result.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  const refreshToken = async () => {
    const newAuthRes = await result.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};
