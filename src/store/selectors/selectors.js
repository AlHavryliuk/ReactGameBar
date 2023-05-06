import { createSelector } from '@reduxjs/toolkit';

export const select = {
  darkMode: state => state.theme.darkMode,
  gamesList: state => state.games.gamesArray,
  gamesIsLoading: state => state.games.isLoading,
  currentPage: state => state.request.page,
  lastPage: state => state.request.lastPage,
  searchQuery: state => state.request.searchQuery,
  pageName: state => state.request.currentPage,
  selectedGame: state => state.selectGame.game,
  selectedIsLoading: state => state.selectGame.isLoading,
  selectedGameScreenshots: state => state.selectGame.screenshots,
  selectedGameAchievements: state => state.selectGame.achievements,
  genres: state => state.genres.genresArray,
  mobileNavigation: state => state.mobileNavigation.navMenu,
  localLibaryGames: state => state.favoriteGames.gameList,
  localCurrentPage: state => state.favoriteGames.page,
  per_page: state => state.favoriteGames.per_page,
  userData: state => state.auth.user,
  authIsLoading: state => state.auth.isLoading,
  authError: state => state.auth.error,
  cloudLibaryGames: state => state.cloudGames.cloudGames,
  cloudIsLoading: state => state.cloudGames.isLoading,
  tempCloudGame: state => state.cloudGames.tempGame,
  totalCloudPages: state => state.cloudGames.totalPages,
};

export const reselect = {
  gamesPagination: createSelector(
    [select.localLibaryGames, select.localCurrentPage, select.per_page],
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
  authCompleteSuccess: createSelector([select.userData], user => {
    if (!user) return false;
    const { email, token } = user;
    if (email && token) {
      return true;
    } else {
      return false;
    }
  }),
};
