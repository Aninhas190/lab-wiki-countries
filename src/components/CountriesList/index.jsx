import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function CountriesList(props) {
  const country = props.country;
  let countryCode = country.cca2
  return (
    <div className="countriesList">
      <img src={`https://www.countryflags.io/${countryCode}/flat/64.png`} alt={country.name.official}/>
      <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
    </div>
  )
}

export default CountriesList;
