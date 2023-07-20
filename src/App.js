
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesApi from './components/CountriesApi';
import FoodApi from './components/FoodApi';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/countries' element = {<CountriesApi/>}/>
        <Route path='/food' element = {<FoodApi/>}/>
      </Routes>
    </div>
  );
}

export default App;
