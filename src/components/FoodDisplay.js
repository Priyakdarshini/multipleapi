import React from 'react';



export default function FoodDisplay(props) {

  return (
    <div className='cards'>
      <img src={props.image} />
      <h4>{props.label}</h4>
      <p>{props.source}</p>
    </div>


  )
}
