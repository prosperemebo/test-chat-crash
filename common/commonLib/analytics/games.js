//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  GAMES_FIND_PLAYERS_PRESSED: 'GAMES_FIND_PLAYERS_PRESSED',
  GAMES_DISCUSS_PRESSED: 'GAMES_DISCUSS_PRESSED',
  GAMES_MOREINFO_PRESSED: 'GAMES_MOREINFO_PRESSED',
  GAMES_ADD_GAME_TO_WP_PRESSED: 'GAMES_ADD_GAME_TO_WP_PRESSED',
  GAMES_REMOVE_PRESSED: 'GAMES_REMOVE_PRESSED',
  GAMES_SEARCH_ADD_PRESSED: 'GAMES_SEARCH_ADD_PRESSED',
  GAMES_SEARCH_REMOVE_PRESSED: 'GAMES_SEARCH_REMOVE_PRESSED',
  GAMES_PLATFORM_SELECTED: 'GAMES_PLATFORM_SELECTED',
  GAMES_RATING_PRESSED: 'GAMES_RATING_PRESSED',
  GAMES_RATING_SELECTED: 'GAMES_RATING_SELECTED',
  GAMES_REVIEW_PRESSED: 'GAMES_REVIEW_PRESSED',
  OPEN_RECOM_FILTERS: 'OPEN_RECOM_FILTERS',
  CLOSE_RECOM_FILTERS: 'CLOSE_RECOM_FILTERS',
  APPLY_RECOM_FILTERS: 'APPLY_RECOM_FILTERS',
  RECOM_SET_PLATFORMS: 'RECOM_SET_PLATFORMS',
  RECOM_SET_GAMESTYPE: 'RECOM_SET_GAMESTYPE',
  RECOM_SET_PLAYERS: 'RECOM_SET_PLAYERS',
  RECOM_SET_GENRES: 'RECOM_SET_GENRES',
  RECOM_SET_THEMES: 'RECOM_SET_THEMES',
  SHOPPING_BUTTON_PRESSED: 'SHOPPING_BUTTON_PRESSED',
  GAMES_ADD_GAME_PRESSED: 'GAMES_ADD_GAME_PRESSED',
  GAMES_ADD_TO_WISHLIST_PRESSED: 'GAMES_ADD_TO_WISHLIST_PRESSED',
  GAMES_REMOVE_FROM_WISHLIST_PRESSED: 'GAMES_REMOVE_FROM_WISHLIST_PRESSED',
  GAMES_RATED_ADD_GAME_SKIPPED: 'GAMES_RATED_ADD_GAME_SKIPPED',
  GAMES_NEXT_PRESSED: 'GAMES_NEXT_PRESSED',
  GAMES_MORE_INFO_PRESSED: 'GAMES_MORE_INFO_PRESSED',
  GAMES_STOP_SEEING_THIS_GAME_PRESSED: 'GAMES_STOP_SEEING_THIS_GAME_PRESSED',
  GAMES_START_SESSION_REPLAY: 'GAMES_START_SESSION_REPLAY',
  GAMES_END_SESSION_REPLAY: 'GAMES_END_SESSION_REPLAY',
}

export default function (amplitude) {
  return {
    findPlayersPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_FIND_PLAYERS_PRESSED)
    },
    discussPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_DISCUSS_PRESSED)
    },
    moreInfoPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_MOREINFO_PRESSED, { gameId })
    },
    addGameToWPPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_ADD_GAME_TO_WP_PRESSED, {
        gameId,
      })
    },
    searchAddPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_SEARCH_ADD_PRESSED)
    },
    searchRemovePressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_SEARCH_REMOVE_PRESSED)
    },
    platformPicked() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_PLATFORM_SELECTED)
    },
    pressedGamesRating(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_RATING_PRESSED, { gameId })
    },
    selectedGamesRating(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_RATING_SELECTED, { gameId })
    },
    writeReviewPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_REVIEW_PRESSED, { gameId })
    },
    pressedGamesReview(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_REVIEW_PRESSED, { gameId })
    },
    openRecomFilters() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.OPEN_RECOM_FILTERS)
    },
    closeRecomFilters() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CLOSE_RECOM_FILTERS)
    },
    applyRecomFilters() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.APPLY_RECOM_FILTERS)
    },
    recomSetPlatforms(value) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.RECOM_SET_PLATFORMS, { value })
    },
    recomSetGamestype(value) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.RECOM_SET_GAMESTYPE, { value })
    },
    recomSetPlayers(value) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.RECOM_SET_PLAYERS, { value })
    },
    recomSetGenres() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.RECOM_SET_GENRES)
    },
    recomSetThemes() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.RECOM_SET_THEMES)
    },
    shoppingButtonPressed(title, value) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SHOPPING_BUTTON_PRESSED, {
        title,
        value,
      })
    },
    gamesAddToWishlistPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_ADD_TO_WISHLIST_PRESSED, {
        gameId,
      })
    },
    gamesRemoveFromWishlistPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_REMOVE_FROM_WISHLIST_PRESSED, {
        gameId,
      })
    },
    addGamePressed(source, gameId, title, genres, platforms) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_ADD_GAME_PRESSED, {
        source,
        gameId,
        title,
        genres,
        platforms,
      })
    },
    gamesRemovePressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_REMOVE_PRESSED, { gameId })
    },
    gamesRatedAddGameSkipped(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_RATED_ADD_GAME_SKIPPED, {
        gameId,
      })
    },
    gamesNextPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_NEXT_PRESSED, { gameId })
    },
    gamesMoreInfoPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_MORE_INFO_PRESSED, { gameId })
    },
    gamesStopSeeingThisGamePressed(gameId) {
      amplitude?.logEvent(
        AMPLITUDE_EVENTS.GAMES_STOP_SEEING_THIS_GAME_PRESSED,
        { gameId }
      )
    },
    startSessionReplay(sessionReplayProperties) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_START_SESSION_REPLAY, sessionReplayProperties)
    },
    endSessionReplay() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMES_END_SESSION_REPLAY)
    },
  }
}
