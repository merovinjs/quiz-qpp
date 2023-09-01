import { useState } from "react";

import styles from "./styles.module.css";
import { Question } from "../../types/quizdatatype";
import Example from "../modal/Modal";
const Quiz = ({ questions }: { questions: Question[] }) => {
  const [score, setScore] = useState(0);

  const selectChoise = (onechoise: string, onequestion: any) => {
    const { id, correctAnswer } = onequestion;
    if (onechoise === correctAnswer) {
      setScore((prevScores: any) => ({
        ...prevScores,
        [id]: +1,
      }));
    } else {
      setScore((prevScores: any) => ({
        ...prevScores,
        [id]: -0.25,
      }));
    }
  };
  const handleTotal = () => {
    const totalScore = Object.values(score).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return totalScore;
  };

  function styleKeywordsInText(text: string) {
    const keywords = ["görülünce", "zemin hazırlar", "noktasını", "günü"];
    const words = text.split(" ");

    return words.map((word, index) =>
      keywords.includes(word) ? (
        <span key={index} className={styles.altCizili}>
          {word}{" "}
        </span>
      ) : (
        word + " "
      )
    );
  }

  return (
    <div className={styles.container}>
      {questions.map((onequestion: any) => (
        <div className={styles.onequestion} key={onequestion.id}>
          <div className={styles.imgContainer}>
            <img
              src={onequestion.question}
              className={styles.questionImage}
              alt=""
            />
          </div>
          <ul className={styles.answerContainer}>
            {onequestion.id === 14
              ? onequestion.choices.map((onechoice: string, index: any) => (
                  <li
                    className={`${styles.answerBtn}`}
                    onClick={() => selectChoise(onechoice, onequestion)}
                    key={onequestion.id + index}
                  >
                    {styleKeywordsInText(onechoice)}
                  </li>
                ))
              : onequestion.choices.map((onechoice: string, index: any) => (
                  <li
                    className={`${styles.answerBtn}`}
                    onClick={() => selectChoise(onechoice, onequestion)}
                    key={onequestion.id + index}
                  >
                    {onechoice}
                  </li>
                ))}
          </ul>
        </div>
      ))}
      <div className={styles.modal}>
        {<Example handleTotal={handleTotal()} score={score} />}
      </div>
    </div>
  );
};
export default Quiz;
