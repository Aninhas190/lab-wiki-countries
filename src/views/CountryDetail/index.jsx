import React from 'react';

import './index.css';

function CountryDetail(props) {
  const country = props.country.find(country => country.cca3 === props.match.params.countryId);
  console.log(country)
  return (
  <div className="country-detail">
    <span>{props.match.params.countryId}</span>
    <p>{country.capital}</p>
    <p>{country.area} km2</p>
    {/* <ul>
  {props.country.map(country => {
    if (country.borders === country.cca3) {
      return <li key={Math.random() * Date.now()}>{country.name.common}</li>
      }
    })}
      
    </ul> */}
  </div>
  );
}

export default CountryDetail;
