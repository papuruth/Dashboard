import myImage from '@/assets/images/my.jpg';

export const getUserProfileImage = (src) => {
  return src || myImage;
};
