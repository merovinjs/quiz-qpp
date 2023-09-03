import React, { useEffect } from "react";
import styles from "./styles.module.css";
const Timer = (): any => {
  const FinishComponent = () => {
    return (
      <div className={styles.finishContainer}>
        <h1>SÜRE BİTTİ.</h1>
        <h1>Sayfanın Altından Puanınızı Kontrol ediniz</h1>
      </div>
    );
  };
  const [timer, setTimer] = React.useState(1500);
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimer(0);
    }
  });

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div>
      {timer === 0 ? (
        <>
          <FinishComponent />
        </>
      ) : (
        <div>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      )}
    </div>
  );
};

export default Timer;
