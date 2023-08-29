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

  return (
    <div>
      {questions.map((onequestion: any) => (
        <div key={onequestion.id}>
          <div>
            <img src={onequestion.question} alt="" />
          </div>
          <ul>
            {onequestion.choices.map((onechoise: string, index: any) => (
              <li
                className={styles.answerBtn}
                onClick={() => handleClick(onechoise, onequestion)}
                key={onequestion.id + index}
              >
                {onechoise}
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
