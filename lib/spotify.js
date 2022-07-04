const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async (refresh_token) => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });
  
    return response.json();
  };



  export const getUsersPlaylists = async (refresh_token) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  export const getUsersTopTracks = async (refresh_token, time_range) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=" + time_range, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  export const getUsersTopArtists = async (refresh_token, time_range) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=" + time_range, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  export const getRecentlyPlayed = async (refresh_token) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };
