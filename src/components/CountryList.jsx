import { useCities } from "../Context/CitiesContext";
import styles from "./CountryList.module.css";

import Spinner from "../components/Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList() {
  const { cities, loading } = useCities();

  //console.log(cities, "from city");

  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first City by Clicking City on the Map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.countryName).includes(city.countryName))
      return [
        ...arr,
        { countryName: city.countryName, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);

  //console.log(countries, "list of city with country");
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
