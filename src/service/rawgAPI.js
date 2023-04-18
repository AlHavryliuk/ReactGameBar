import axios from 'axios';
import { apiData } from 'configuration/config';

export const fetchGameList = async (page = 1, search = '') => {
  const {
    data: { count, results },
  } = await axios.get(`${apiData.BASE_URL}games`, {
    params: {
      key: apiData.KEY,
      page: page,
      page_size: apiData.per_page,
      search,
    },
  });
  return { count, results};
};

export const fetchGameListByGenre = async (page = 1, genres) => {
  const {
    data: { count, results },
  } = await axios.get(`${apiData.BASE_URL}games`, {
    params: {
      key: apiData.KEY,
      page: page,
      page_size: apiData.per_page,
      genres,
    },
  });

  return { count, results };
};

export const fetchGenreList = async (page = 1) => {
  const {
    data: { count, results },
  } = await axios.get(`${apiData.BASE_URL}genres`, {
    params: { key: apiData.KEY, page: page, page_size: 19 },
  });

  return { count, results };
};

export const fetchGameDetails = async id => {
  const { data } = await axios.get(`${apiData.BASE_URL}games/${id}`, {
    params: { key: apiData.KEY },
  });

  return data;
};

export const fetchGameScreenshots = async game_pk => {
  const {
    data: { results },
  } = await axios.get(`${apiData.BASE_URL}games/${game_pk}/screenshots`, {
    params: { key: apiData.KEY },
  });

  return results;
};

export const fetchGameAchievements = async id => {
  const {
    data: { results },
  } = await axios.get(`${apiData.BASE_URL}games/${id}/achievements`, {
    params: { key: apiData.KEY },
  });

  return results;
};
