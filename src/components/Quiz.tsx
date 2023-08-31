import { useState } from "react";
import { Question } from "../types/quizdatatype";
import styles from "./styles.module.css";
const Quiz = ({ questions }: { questions: Question[] }) => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  console.log(questions);
  const handleClick = (onechoise: string, onequestion: any) => {
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
    console.log(id, correctAnswer);
  };
  const handleTotal = () => {
    const totalScore = Object.values(score).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return totalScore;
  };
  const handleSonuc = () => {
    handleTotal();
    setShowResult(true);
  };

  function styleKeywordsInText(text: string) {
    const keywords = ["görülünce", "zemin hazırlar", "noktasını", "günü"];
    const words = text.split(" ");
    console.log(words);
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
                    onClick={() => handleClick(onechoice, onequestion)}
                    key={onequestion.id + index}
                  >
                    {styleKeywordsInText(onechoice)}
                  </li>
                ))
              : onequestion.choices.map((onechoice: string, index: any) => (
                  <li
                    className={`${styles.answerBtn}`}
                    onClick={() => handleClick(onechoice, onequestion)}
                    key={onequestion.id + index}
                  >
                    {onechoice}
                  </li>
                ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSonuc}>Sonuç Göster</button>
      {showResult && <div>Total Score: {handleTotal()}</div>}
    </div>
  );
};
export default Quiz;
