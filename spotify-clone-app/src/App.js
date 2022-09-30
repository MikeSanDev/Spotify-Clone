import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login'
import Player from './components/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  // to pull information, dispatch points at the data layer to pull data
  // you can pull anything in the data layer with this line
  const [{ token }, dispatch] = useDataLayerValue();

  // used _token to differentiate between state and the temporary token
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // gives access token to the spotify api
      spotify.setAccessToken(_token);
      // gets user account - async call
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      // gets playlist from api 
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      // getting discover weekly from api - using my specific discover weekly
      spotify.getPlaylist('37i9dQZEVXcQ9COmYvdajy').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);


  return (
    <div className="app">
      {/* if there is a token then it will show the player, otherwise it will redirect back to login page */}
      {
        token ?
          <Player spotify={spotify} /> :
          <Login />
      }
    </div>
  );
}

export default App;


// Prop Drilling: unofficial term for passing data through several nested children components, in a bid to deliver this data to a deeply-nested component.
// can be problematic as it grows - when you make changes, it can affect other components
// you can use REDUX or Context API - we used Context API for this project