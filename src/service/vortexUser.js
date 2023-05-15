import { $privateHost } from './hosts';

export const updateUserNickname = async nickname => {
  const { data } = await $privateHost.patch('users/credentials', nickname);
  return data;
};

export const updateUserAvatar = async avatar => {
  const { data } = await $privateHost.patch('users/avatars', avatar);
  return data;
};

export const getAllUsers = async (page = 1) => {
  const { data } = await $privateHost.get(`users/all?page=${page}`);
  return data;
};
