import './App.css';
import React, { useEffect,useState} from 'react';
import Login from './Login';
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
  
}

 console.log("I have a TOKEN",token)
},[]);


  return (
     <div className="app">
{
  token ? (
    <h1>I am logged in</h1>
  ) : (
    <Login />
  )
} </div>
  );
}

export default App;
