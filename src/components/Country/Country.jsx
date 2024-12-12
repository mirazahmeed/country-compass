import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
    console.log(country);
    const { name, flags, area, capital, borders, languages, population, cca3 } =
        country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    };
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
            <button onClick={handleVisitedCountry}>Set Visited</button>
            {/* {visited && <div>You have visited this country</div>} */}
            {visited
                ? "You have visited this country"
                : "I want to visit this country"}
        </div>
    );
};

export default Country;
