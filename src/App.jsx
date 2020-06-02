import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import CountryDetail from './views/CountryDetail';
import CountriesList from './components/CountriesList'

import './App.css';


import countries from './countries.json';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <aside className="countriesList">
          <span>Country Name</span>
          {countries.map(country => {
            return <CountriesList key={Math.random() * Date.now()} country={country} />
          }
          )}
        </aside>
          <Route path="/country/:countryId" exact render={(props) => <CountryDetail country={countries} {...props}/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
