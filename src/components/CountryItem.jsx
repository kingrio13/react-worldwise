import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { countryName, emoji } = country;

  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <h3> {countryName}</h3>
    </li>
  );
}

export default CountryItem;
