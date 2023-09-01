import { useState } from "react";
import styles from "./styles.module.css";
const Example = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal((prev) => !prev);
  };

  const ModalContainer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.container2}>
          <p>modellerbura daddır</p>
          <p>modellerbura daddır</p>
          <p>modellerbura daddır</p>
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
      <button onClick={handleClick}>click</button>
      <div>{modaltext}</div>
    </>
  );
};

export default Example;
