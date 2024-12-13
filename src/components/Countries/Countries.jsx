import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    };
    return (
        // Display visited countries

        <div>
            <div>
                <h2>Visited Countries : {countries.length}</h2>
                <div>
                    <h5>Visited Countries {visitedCountries.length}</h5>
                    <ul>

                    </ul>
                </div>
            </div>
            <h2>Countries : {countries.length}</h2>
            <div className="country-container">
                {countries.map((country) => (
                    <Country
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
