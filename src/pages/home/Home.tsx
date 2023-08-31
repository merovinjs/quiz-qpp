import styles from "./styles.module.css";
const Home = () => {
  return (
    <>
      <a className={styles.container} href="/turk">
        türkçe
      </a>
      <a className={styles.container} href="/mathe">
        mathematik
      </a>
    </>
  );
};

export default Home;
