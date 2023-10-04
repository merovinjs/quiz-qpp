import { useState } from "react";
import { YanlısCvpType } from "../../types/quizdatatype";
import styles from "./styles.module.css";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
export const YanlısCvp = ({
  yanlıscvpdata,
}: {
  yanlıscvpdata: YanlısCvpType[];
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImg = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? yanlıscvpdata.length - 1 : prevIndex - 1
    );
  };
  const showNextImg = () => {
    setImageIndex((prevIndex) =>
      prevIndex === yanlıscvpdata.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgSliderContainer}>
        {yanlıscvpdata.map((oneYanlıs) => (
          <img
            key={oneYanlıs.id}
            src={oneYanlıs.question}
            alt={oneYanlıs.alt}
            className={styles.imgSliderImg}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImg}
        className={`${styles.imgSliderBtn}`}
        style={{ left: 0 }}
      >
        <BsFillArrowLeftSquareFill />
      </button>
      <button
        onClick={showNextImg}
        className={`${styles.imgSliderBtn}`}
        style={{ right: 0 }}
      >
        <BsFillArrowRightSquareFill />
      </button>
    </div>
  );
};
