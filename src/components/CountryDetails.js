import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
    const { id } = useParams();
    const country = countries.find((c) => c.alpha3Code === id);
    const flagURL = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

  return (
    <div className="container mt-4">
      {country ? (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">{country.name.common}</div>
              <div className="card-body">
              <img src={flagURL} alt={country.name.common} style={{ marginBottom: '10px' }} />

<h2>{country.name.common}</h2>
<p>Official Name: {country.name.official}</p>
                {/* <p>Alpha3Code: {country.alpha3Code}</p> */}
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Area: {country.area}</p>
                <p>Borders:</p>
                {/* Add other details as needed */}
                <ul>
            {country.borders.map((borderCode) => {
              const borderCountry = countries.find((c) => c.alpha3Code === borderCode);
              return (
                <li key={borderCountry.alpha3Code}>
                  <Link to={`/${borderCountry.alpha3Code}`}>{borderCountry.name.common}</Link>
                </li>
              );
            })}
          </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <p>Country not found.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
