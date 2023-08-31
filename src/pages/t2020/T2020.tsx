import styles from "./styles.module.css";
import { quizData } from "../../data/quizdata";
import Quiz from "../../components/Quiz";
const T2020 = () => {
  return (
    <div className={styles.container}>
      <Quiz questions={quizData.questions} />
    </div>
  );
};

export default T2020;
