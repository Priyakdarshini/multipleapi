import React from 'react'

export default function CountriesDisplay(props) {
  return (
    <div className='mt-5 card'>
      <img src={props.image} />
      <h1>Name : {props.name}</h1>
      <h5>Capital : {props.capital}</h5>
      <h5>Population : {props.population}</h5>
    </div>
  )
}
