import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    };

    const handleVisitedFlags = (flags) => {
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    };

    return (
        // Display visited countries

        <div>
            <div>
                <h3>visitedFlags</h3>
                <div className="flag-container">
                    {visitedFlags.map((flag, idx) => (
                        <img key={idx} src={flag} alt={flag}></img>
                    ))}
                </div>
            </div>

            <div>
                <h2>Visited Countries : {countries.length}</h2>
                <div>
                    <h5>Visited Countries {visitedCountries.length}</h5>
                    <ul>
                        {visitedCountries.map((visit) => (
                            <li key={visit.cca3}>{visit.name.common}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <h2>Countries : {countries.length}</h2>
            <div className="country-container">
                {countries.map((country) => (
                    <Country
                        handleVisitedFlags={handleVisitedFlags}
                        handleVisitedCountry={handleVisitedCountry}
                        key={country.cca3}
                        country={country}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
