interface Props {
  name: string;
}
import styles from "./styles.module.css";
const Description = ({ name }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <br />
      <div className={styles.descContainer}>
        <p>
          <b>1.</b>&nbsp;Bu test toplam 25 sorudan oluşur ve süre 25 dakikadır.
        </p>
        <br />
        <p>
          <b>2.</b>&nbsp;Her 3 yanlış cevap 1 doğru cevabı götürecektir.
        </p>
        <br />
        <p>
          <b>3.</b>&nbsp;Testin sonunda puanınızı ve yanlış cevapladığınız
          sorulları görebilieceksiniz.
        </p>
        <br />
        <p>
          <b>4.</b>&nbsp;25 dakika içerisinde cevaplarınızı değiştirme hakkınız
          bulunmaktadır.
        </p>
      </div>
      <br />
      <p>
        <b>BAŞARILAR...</b>
      </p>
    </div>
  );
};

export default Description;
