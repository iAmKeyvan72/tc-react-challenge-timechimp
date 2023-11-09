import endpoints from 'constants/endpoints';
import spotifyAuthConstants from 'constants/spotifyAuthConstants';

const {
  REACT_APP_SPOTIFY_CLIENT_ID: CLIENT_ID,
  REACT_APP_SPOTIFY_REDIRECT_URI: REDIRECT_URI,
} = process.env;

const Login = () => {
  if (!CLIENT_ID || !REDIRECT_URI) {
    return (
      <div>
        Error: Missing or invalid configuration, Please refresh the page.
      </div>
    );
  }

  const loginUrl = `${endpoints.AUTH}?response_type=${spotifyAuthConstants.RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${spotifyAuthConstants.SCOPE}`;

  return <a href={encodeURI(loginUrl)}>Login with Spotify</a>;
};

export default Login;
