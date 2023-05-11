import { $privateHost } from './hosts';

export const updateUserNickname = async nickname => {
  const { data } = await $privateHost.patch('users/credentials', nickname);
  return data;
};

export const updateUserAvatar = async avatar => {
  const { data } = await $privateHost.patch('users/avatars', avatar);
  return data;
};
