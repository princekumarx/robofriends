import React from 'react';
import './Card.css'

function Card(props){
    const {name,email,id}= props;
    return(
        
    <div className=" bg-light-green green tc  dib grow br3 pa2 ma2">
        <img className="bb b--white-90 ma1" src={`https://robohash.org/${id}/bgset_bg1/?size=200x200`} alt="robot"/>
        <div>
            <h2>{name}</h2>
          <p>  {email}</p>
        </div>
    </div>
    
    )
}



export default Card;