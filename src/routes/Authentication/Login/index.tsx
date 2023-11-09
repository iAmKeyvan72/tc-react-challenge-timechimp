import endpoints from 'constants/endpoints';
const scope = 'user-read-private user-read-email';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const RESPONSE_TYPE = 'token';

const Login = () => {
  return (
    <a
      href={encodeURI(
        `${endpoints.AUTH}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope}`
      )}
    >
      Login with Spotify
    </a>
  );
};

export default Login;
