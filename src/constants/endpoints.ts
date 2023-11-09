export const spotifyBaseUrl = 'https://api.spotify.com/v1';
const endpoints = {
  AUTH: `https://accounts.spotify.com/authorize`,
  CATEGORIES: `${spotifyBaseUrl}/token`,
  NEW_RELEASES: `${spotifyBaseUrl}/token`,
  FEATURED_PLAYLISTS: `${spotifyBaseUrl}/token`,
};

export default endpoints;
