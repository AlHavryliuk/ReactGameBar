import { createSelector } from '@reduxjs/toolkit';

export const select = {
  darkMode: state => state.theme.darkMode,
  gamesList: state => state.games.gamesArray,
  isLoading: state => state.games.isLoading,
  page: state => state.request.page,
  lastPage: state => state.request.lastPage,
  searchQuery: state => state.request.searchQuery,
  currentPage: state => state.request.currentPage,
  selectedGame: state => state.selectGame.game,
  selectedIsLoading: state => state.selectGame.isLoading,
  screenshots: state => state.selectGame.screenshots,
  genres: state => state.genres.genresArray,
  mobileNavigation: state => state.mobileNavigation.navMenu,
  favoriteGames: state => state.favoriteGames.gameList,
  localPage: state => state.favoriteGames.page,
  per_page: state => state.favoriteGames.per_page,
};

export const reselect = {
  gamesPagination: createSelector(
    [select.favoriteGames, select.localPage, select.per_page], // Arguments
    (games, page, per_page) => {
      if (page === 1) {
        return games.filter((_, index) => index < per_page);
      }
      return games.filter(
        (_, index) =>
          index > page * per_page - (per_page + 1) && index < page * per_page
      );
    }
  ),
};
