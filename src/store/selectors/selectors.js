export const select = {
  darkMode: state => state.theme.darkMode,
  gamesList: state => state.games.gamesArray,
  isLoading: state => state.games.isLoading,
  page: state => state.request.page,
  lastPage: state => state.request.lastPage,
  selectedGame: state => state.selectGame.game,
  screenshots: state => state.selectGame.screenshots,
  genres: state => state.genres.genresArray,
  mobileNavigation: state => state.mobileNavigation.navMenu,
  favoriteGames: state => state.favoriteGames.gameList,
};
