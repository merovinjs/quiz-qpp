interface Props {
  name: string;
}
import Timer from "../timer/Timer";
import styles from "./styles.module.css";

const Description = ({ name }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <br />
      <div className={styles.descContainer}>
        <p>
          <b>1.</b>&nbsp;Bu test toplam <b>25</b> sorudan oluşur ve süre{" "}
          <b>25</b>&nbsp; dakikadır.
        </p>
        <br />
        <p>
          <b>2.</b>&nbsp;Her <b>3</b> yanlış cevap <b>1</b> doğru cevabı
          götürecektir.
        </p>
        <br />
        <p>
          <b>3.</b>&nbsp;Testin sonunda puanınızı ve yanlış cevapladığınız
          sorulları görebilieceksiniz.
        </p>
        <br />
        <p>
          <b>4.</b>&nbsp;<b>25</b> dakika içerisinde cevaplarınızı değiştirme
          hakkınız bulunmaktadır.
        </p>
      </div>
      <br />
      <div>
        <b>BAŞARILAR...</b>
        <Timer />
      </div>
    </div>
  );
};

export default Description;
