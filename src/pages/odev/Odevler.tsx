import { YanlısCvp } from "../../components/odevler/YanlısCvp";
import styles from "./styles.module.css";
import { yanlıscvpdata } from "../../data/yanlışcvpdata";
export const Odevler = () => {
  return (
    <div className={styles.container}>
      <YanlısCvp yanlıscvpdata={yanlıscvpdata.questions} />
    </div>
  );
};
