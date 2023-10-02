/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import styles from "./styles.module.css";
import { Question } from "../../types/quizdatatype";
import Modal from "../modal/Modal";
const Quiz = ({ questions }: { questions: Question[] }) => {
  const [score, setScore] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Array<number | null>>(
    questions.map(() => null)
  );

  const selectChoice = (
    onechoice: string,
    onequestion: any,
    questionIndex: number,
    choiceIndex: number
  ) => {
    const { id, correctAnswer } = onequestion;
    if (onechoice === correctAnswer) {
      setScore((prevScores: any) => ({
        ...prevScores,
        [id]: +1,
      }));
    } else {
      setScore((prevScores: any) => ({
        ...prevScores,
        [id]: -0.33,
      }));
    }

    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[questionIndex] = choiceIndex;
    setSelectedChoices(newSelectedChoices);
  };

  const handleTotal = () => {
    const totalScore = Object.values(score).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return totalScore;
  };

  function styleKeywordsInText(text: string) {
    const keywords = ["görülünce", "zeminhazırlar.", "noktasını", "günü"];
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
      {questions.map((onequestion: any, questionIndex: number) => (
        <div className={styles.onequestion} key={onequestion.id}>
          <div className={styles.imgContainer}>
            <img
              src={onequestion.question}
              className={styles.questionImage}
              alt=""
            />
          </div>
          <ul className={styles.answerContainer}>
            {onequestion.choices.map(
              (onechoice: string, choiceIndex: number) => (
                <li
                  className={`${styles.answerBtn} ${
                    selectedChoices[questionIndex] === choiceIndex
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() =>
                    selectChoice(
                      onechoice,
                      onequestion,
                      questionIndex,
                      choiceIndex
                    )
                  }
                  key={onequestion.id + choiceIndex}
                >
                  {styleKeywordsInText(onechoice)}
                </li>
              )
            )}
          </ul>
        </div>
      ))}
      <div className={styles.modal}>
        {<Modal handleTotal={handleTotal()} score={score} />}
      </div>
    </div>
  );
};
export default Quiz;
