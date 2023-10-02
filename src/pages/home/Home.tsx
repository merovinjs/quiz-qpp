import styles from "./styles.module.css";
const Home = () => {
  const colors: string[] = ["#3c787e", "#241623", "#d56f3e", "#92140c"];

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Bursluluk Sınavı Çıkmış Sorular</h1>
          <img src="./paraanimasyon.gif" alt="" />
        </div>
        <div className={styles.btnContainer}>
          <a style={{ backgroundColor: colors[0] }} href="/turk">
            Türkçe 2020 soruları
          </a>
        </div>
        <div className={styles.btnContainer}>
          <a style={{ backgroundColor: colors[1] }} href="/odev">
            Ödevlerin doğru çözümleri
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
