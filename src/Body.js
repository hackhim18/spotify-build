import React from 'react'
import './Body.css'
import  Header  from './Header.js'

function Body({spotify}) {
     return (
        <div className="body">
            <Header spotify ={spotify} /> 

        <div className="body__info">
            <img src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png" alt="" />
             <div className="body__infoText">
                 <strong>PLAYLIST</strong>
                 <h2>Discover Weekly</h2>
                 <p>description...</p>

            </div>
        </div>
        </div>
        
    )
}

export default Body
