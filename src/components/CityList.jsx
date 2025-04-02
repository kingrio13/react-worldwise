import { useCities } from "../Context/CitiesContext";
import styles from "./CityList.module.css";

import Spinner from "../components/Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList() {
  const { cities, loading } = useCities();

  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first City by Clicking City on the Map" />
    );

  // console.log(cities, "cities");

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
