import { YanlısCvp } from "../../components/odevler/YanlısCvp";
import styles from "./styles.module.css";
import { yanlıscvpdata } from "../../data/yanlışcvpdata";
export const Odevler = () => {
  return (
    <div>
      <h1 className={styles.Baslik}>Yanlış Yaptığın Soruların Çözümü</h1>
      <YanlısCvp yanlıscvpdata={yanlıscvpdata.questions} />
    </div>
  );
};
