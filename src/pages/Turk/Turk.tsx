import styles from "./styles.module.css";
import { quizData } from "../../data/quizdata";
import Quiz from "../../components/quizbase/Quiz";

const Turk = () => {
  return (
    <div className={styles.container}>
      <Quiz questions={quizData.questions} />
    </div>
  );
};

export default Turk;
