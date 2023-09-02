import styles from "./styles.module.css";
const Home = () => {
  let colors: string[] = [
    "#00bfff",
    "#ff1493",
    "#ff69b4",
    "#ffd700",
    "#ffa500",
    "#ffc0cb",
    "#00ff7f",
    "#00fa9a",
    "#00ff00",
    "#008080",
    "#0000ff",
  ];

  return (
    <>
      <div className={styles.btnContainer}>
        <a style={{ backgroundColor: colors[0] }} href="/turk">
          Türkçe 2020 soruları
        </a>
        <a style={{ backgroundColor: colors[4] }} href="/mathe">
          Mathematik 2020 soruları
        </a>
      </div>
    </>
  );
};

export default Home;
