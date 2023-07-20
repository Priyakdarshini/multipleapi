import React from 'react';
import image from './Images/country1.jpeg'
import image1 from './Images/food.jpg'
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className=' '>
      <Link to='./countries'><img className='image img1' src={image} /></Link>
      <Link to='./food'><img className='image img2' src={image1} /></Link>
    </div>
  )
}
