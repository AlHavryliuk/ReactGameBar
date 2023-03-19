import axios from 'axios';
import { apiData } from 'configuration/config';

export const fetchGameList = async (page = 1) => {
  const {
    data: { count, results },
  } = await axios.get(`${apiData.BASE_URL}games`, {
    params: { key: apiData.KEY, page: page, page_size: apiData.per_page },
  });

  return { count, results };
};

export const fetchGenreList = async (page = 1) => {
  const {
    data: { count, results },
  } = await axios.get(`${apiData.BASE_URL}genres`, {
    params: { key: apiData.KEY, page: page, page_size: apiData.per_page },
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
