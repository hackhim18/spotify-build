import './App.css';
import React, { useEffect,useState} from 'react';
import Login from './Login';
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from './DataLayer';

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();


function App() {
//const [token, setToken] =  useState();

const [{user, token},  dispatch] = useDataLayerValue()




// runs the code on a given condition 
useEffect(() => { 
const hash = getTokenFromUrl();
window.location.hash="";
const _token = hash.access_token;

if(_token) {

  dispatch({
    type:"SET_TOKEN",
    token: _token,
  })

//  setToken(_token);

  spotify.setAccessToken(_token);
  spotify.getMe().then(user =>{
    console.log(' ',user);
    console.log(' ',token);
    dispatch({
      type: "SET_USER",
      user: user
    })
    });

  }
//console.log("I have a TOKEN",token)
},[]);


  return ( <div className="app">

 { token ?  
  <Player spotify={spotify}/> : <Login />} </div>
  );
}

export default App;
