import querystring from 'querystring';

import endpoints from '../../constants/endpoints';

// const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
// const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

// export const getAccessToken = async () => {
//   const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
//   const response = await fetch(endpoints.TOKEN_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       Authorization: `Basic ${basic}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: querystring.stringify({
//       grant_type: 'refresh_token',
//       refresh_token,
//     }),
//   });

//   return response.json();
// };
