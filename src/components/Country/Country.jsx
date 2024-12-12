import "./Country.css";

const Country = ({ country }) => {
    console.log(country);
    const { name, flags, area, capital, borders, languages, population, cca3 } =
        country;
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <img className="flag" src={flags?.png} alt={name?.common} />
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <h4>Population: {population}</h4>
            <p>code: {cca3}</p>
        </div>
    );
};

export default Country;
