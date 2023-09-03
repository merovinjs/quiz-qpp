import { useState } from "react";
import styles from "./styles.module.css";
interface handleProp {
  handleTotal: () => void;
  score: any;
}
const Modal = ({ handleTotal, score }: handleProp) => {
  let points: any = handleTotal;
  let point = Math.floor(points);
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal((prev) => !prev);
  };

  const ModalContainer = () => {
    const scoreEntiries = Object.entries(score);
    return (
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.puanınız}>
            <p className={styles.puanınızText}>Puanınınız:</p>
            <div className={styles.point}>
              {point > 20 ? point + `🎊` : point + `😢`}
            </div>
          </div>
          <div className={styles.wrongQestions}>
            {scoreEntiries.map(([key, value]: any) => (
              <div className={styles.oneWrongQuestion} key={key}>
                {value === -0.33 ? key + ".Soru yanlış" : ""}
              </div>
            ))}
          </div>
          <button className={styles.button} onClick={handleClick}>
            <div style={{ backgroundColor: "fff" }}>
              <img src="/close.svg" alt="close" />
            </div>
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

export default Modal;
