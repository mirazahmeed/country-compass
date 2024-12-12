import "./Country.css";

const Country = ({ country }) => {
    console.log(country);
    const { name, flags } = country;
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <img className="flag" src={flags?.png} alt={name?.common} />
        </div>
    );
};

export default Country;
