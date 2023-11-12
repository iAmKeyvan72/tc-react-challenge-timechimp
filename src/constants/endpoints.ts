const spotifyBrowseBaseUrl = 'https://api.spotify.com/v1/browse';
const endpoints = {
  AUTH: `https://accounts.spotify.com/authorize`,
  CATEGORIES: `${spotifyBrowseBaseUrl}/categories`,
  NEW_RELEASES: `${spotifyBrowseBaseUrl}/new-releases`,
  FEATURED_PLAYLISTS: `${spotifyBrowseBaseUrl}/featured-playlists`,
};

export default endpoints;
