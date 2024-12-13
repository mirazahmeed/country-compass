import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country);
    const { name, flags, area, capital, population, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    };

    // const passWithParams= () => {
    //     handleVisitedCountry(country)
    // }

    return (
        <div className={`country ${visited && `visited`}`}>
            <h3>Name: {name?.common}</h3>
            <img className="flag" src={flags?.png} alt={name?.common} />
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <h4>Population: {population}</h4>
            <p>code: {cca3}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Going"}
            </button>
            <br />
            <button onClick={() => handleVisitedFlags(flags?.png)}>
                Add Visited Flag
            </button>
            <br />
            <button onClick={() => handleVisitedCountry(country)}>
                Set Visited
            </button>
            {/* {visited && <div>You have visited this country</div>} */}
            {visited
                ? "You have visited this country"
                : "I want to visit this country"}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;
