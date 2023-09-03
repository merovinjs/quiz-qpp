import styles from "./styles.module.css";
import { quizData } from "../../data/quizdata";
import Quiz from "../../components/quizbase/Quiz";
import Description from "../../components/description/Description";

const Turk = () => {
  return (
    <div className={styles.container}>
      <Description name="Türkçe testi " />
      <Quiz questions={quizData.questions} />
    </div>
  );
};

export default Turk;
