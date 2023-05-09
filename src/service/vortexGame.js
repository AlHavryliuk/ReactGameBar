import { $privateHost } from './hosts';

export const postGame = async game => {
  const { data } = await $privateHost.post('games', game);
  return data;
};

export const getAll = async page => {
  const { data } = await $privateHost.get('games', { params: { page } });
  return data;
};

export const deleteGame = async gameID => {
  const { data } = await $privateHost.patch(`games/${gameID}`);
  return data;
};

export const getGameById = async gameID => {
  const { data } = await $privateHost.get(`games/${gameID}`);
  return data;
};
