import styles from "./styles.module.css";
const QuizCard = ({ item, score, setScore }: any) => {
  const handleAnswer = (answer: any): void => {
    if (answer.isCorrect === true) {
      setScore(score + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <img src={item.questionImg} alt="image" />
        <ul>
          {item.answerOptions.map((answer: any, index: number) => (
            <button onClick={() => handleAnswer(answer)} key={index}>
              {answer.answerText}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizCard;
