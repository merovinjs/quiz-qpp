export const quizData = {
  questions: [
    {
      id: 1,
      question: "t_1_soru.png",
      choices: [
        "A) Bynı kitabın birkaç kez okunmasının okura katkısı nedir ?",
        "B) Ne tür kitaplar okumayı seversiniz?",
        "C) Kitapların mevsimlere göre sınıflandırılmasını doğru buluyor musunuz?",
        "D) Yaz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
      ],
      correctAnswer:
        "D) Yaz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
    },
    {
      id: 2,
      question: "t_1_soru.png",
      choices: [
        "A) Aynı kitabın birkaç kez okunmasının okura katkısı nedir ?",
        "B) Ne tür kitaplar okumayı seversiniz?",
        "C) Kitapların mevsimlere göre sınıflandırılmasını doğru buluyor musunuz?",
        "D) Zaz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
      ],
      correctAnswer:
        "D) Zaz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
    },
    {
      id: 3,
      question: "t_1_soru.png",
      choices: [
        "A) Aynı kitabın birkaç kez okunmasının okura katkısı nedir ?",
        "B) Ne tür kitaplar okumayı seversiniz?",
        "C) Kitapların mevsimlere göre sınıflandırılmasını doğru buluyor musunuz?",
        "D) Kaz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
      ],
      correctAnswer:
        "D) Kaz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
    },
    {
      id: 4,
      question: "t_1_soru.png",
      choices: [
        "A) Aynı kitabın birkaç kez okunmasının okura katkısı nedir ?",
        "B) Ne tür kitaplar okumayı seversiniz?",
        "C) Kitapların mevsimlere göre sınıflandırılmasını doğru buluyor musunuz?",
        "D) Saz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
      ],
      correctAnswer:
        "D) Saz mevsiminde yeni çıkan kitapların okunması gerektiği düşüncesine katılıyor musunuz?",
    },
  ],
};
interface ResultsState {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}
export const resultsInitialState: ResultsState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
