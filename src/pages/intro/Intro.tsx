import Dropdown from "../../components/dropdown/Dropdown";
import styles from "./styles.module.css";
const Intro = () => {
  const difficulty = ["easy", "middle", "hard"];
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <div className={styles.image}>
          <img
            src="https://images.pexels.com/photos/8834489/pexels-photo-8834489.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="quiz app"
          />
        </div>
        <Dropdown />
        <div className={styles.start}>Quize başla</div>
      </div>
    </div>
  );
};

export default Intro;
