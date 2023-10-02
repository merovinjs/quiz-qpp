import { YanlısCvpType } from "../../types/quizdatatype";
import styles from "./styles.module.css";

export const YanlısCvp = ({
  yanlıscvpdata,
}: {
  yanlıscvpdata: YanlısCvpType[];
}) => {
  console.log({ yanlıscvpdata });
  return (
    <>
      {yanlıscvpdata.map((oneYanlıs) => (
        <div className={styles.imgContainer} key={oneYanlıs.id}>
          <img src={oneYanlıs.question} alt="" className={styles.questionImg} />
        </div>
      ))}
    </>
  );
};
