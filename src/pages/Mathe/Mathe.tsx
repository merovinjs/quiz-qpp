import Quiz from "../../components/quizbase/Quiz";
import { quizData2 } from "../../data/quizdata2";
import styles from "./styles.module.css";
const Mathe = () => {
  return (
    <div className={styles.container}>
      <Quiz questions={quizData2.questions} />
    </div>
  );
};

export default Mathe;
