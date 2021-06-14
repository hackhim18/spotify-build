import './App.css';
import React, { useEffect,useState} from 'react';
import Login from './Login';
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();


function App() {
const [token, setToken] =  useState();

// runs the code on a given condition 
useEffect(() => {
 const hash = getTokenFromUrl();
window.location.hash="";
const _token = hash.access_token;

if(_token) {
  setToken(_token);

  spotify.setAccessToken(_token);
  spotify.getMe().then(user =>{
    console.log(' ',user);
  })
}


console.log("I have a TOKEN",token)
},[]);


  return (
     <div className="app">

 { token ?  
  <Player />
    : <Login />}
  )
 </div>
  );
}

export default App;
