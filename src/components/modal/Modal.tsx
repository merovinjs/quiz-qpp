import { useState } from "react";
import styles from "./styles.module.css";
interface handleProp {
  handleTotal: () => void;
  score: any;
}
const Example = ({ handleTotal, score }: handleProp) => {
  let point: any = handleTotal;
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal((prev) => !prev);
  };
  const scoreEntiries = Object.entries(score);

  const ModalContainer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.Puanınız}>
            <p>Puanınınız:</p>
            <div>{point}</div>
          </div>
          <div className={styles.wrongQestions}>
            {scoreEntiries.map(([key, value]: any) => (
              <div className={styles.oneWrongQuestion} key={key}>
                {value === -0.25 ? key + ".Soru yanlış" : ""}
              </div>
            ))}
          </div>
          <button className={styles.button} onClick={handleClick}>
            close
          </button>
        </div>
      </div>
    );
  };
  const modaltext = modal ? <ModalContainer /> : "";

  return (
    <>
      <div>{modaltext}</div>
      <button className={styles.bottomBtn} onClick={handleClick}>
        Puanınız
      </button>
    </>
  );
};

export default Example;
