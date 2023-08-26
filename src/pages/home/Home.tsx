import { useState } from "react";
import QuizCard from "../../components/QuizCard";
import { quizData } from "../../data/quizdata";
import styles from "./styles.module.css";
const Home = () => {
  const [score, setScore] = useState(0);
  const [showresult, setShowResult] = useState(false);

  const handleFinish = () => {
    setShowResult(true);
  };

  console.log(quizData);
  return (
    <div className={styles.container}>
      {quizData.map((item: any, index) => (
        <QuizCard key={index} item={item} score={score} setScore={setScore} />
      ))}
      <button onClick={handleFinish}>finish</button>
      {showresult && <p>Your Score: {score}</p>}
    </div>
  );
};

export default Home;
