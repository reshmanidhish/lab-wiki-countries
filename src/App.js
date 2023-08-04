import React ,{useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import countriesJson from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/NavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  const [countries,setCountries] = useState(countriesJson)
  useEffect(() => {
    // Fetch data from the API
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        // Set the response data in the state
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // 
  
  
  
  
  
  return (

      <div>
        <Navbar />
        <div className="container">
          <div className="row"></div>
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route path="/:id" element={<CountryDetails countries={countries} />} />
          </Routes>
          </div>
        </div> 
     
   
  );
};
export default App