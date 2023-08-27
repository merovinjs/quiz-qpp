import { useState } from "react";
import styles from "./styles.module.css";
import { resultsInitialState } from "../data/quizdata";
interface Props {
  question: any;
  choices: string[];
  correctAnswer: string;
}
const Quiz = ({ questions }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [result, setResult] = useState(resultsInitialState);
  const { question, choices, correctAnswer }: Props =
    questions[currentQuestion];

  const onAnswerClick = (answer: any, index: any) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            score: prev.score - 0.25,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }
  };
  return (
    <div className={styles.container}>
      <>
        <span className="">{currentQuestion + 1}</span>
        <span className="">/{questions.length}</span>
        <div>
          <img src={question} alt="soru" />
          <ul>
            {choices.map((choice: any, index) => (
              <li
                onClick={() => onAnswerClick(choice, index)}
                key={choice}
                className={answerIdx === index ? styles.selecetedAnswer : ""}
              >
                {choice}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer}>
          <button onClick={onClickNext}>
            {currentQuestion === questions.length - 1
              ? styles.finish
              : styles.next}
            Next
          </button>
        </div>
      </>
    </div>
  );
};

export default Quiz;
