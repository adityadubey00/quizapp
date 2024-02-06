const question = [
  {
    question: "Which is Largest animal in the world ",
    answers: [
      { Text: "shark", correct: false },
      { Text: "Blue whale", correct: true },
      { Text: "dog", correct: false },
      { Text: "cat", correct: false },
    ],
  },
  {
    question: "Who is great ",
    answers: [
      { Text: "YOU", correct: false },
      { Text: "SHREE RAM", correct: true },
      { Text: "ME", correct: false },
      { Text: "NONE", correct: false },
    ],
  },
  {
    question: "Who made this  ",
    answers: [
      { Text: "You", correct: false },
      { Text: "ME", correct: true },
      { Text: "No One", correct: false },
      { Text: "Chatgpt", correct: false },
    ],
  },
  {
    question: "You want to Dance ",
    answers: [
      { Text: "no", correct: false },
      { Text: "yes", correct: true },
      { Text: "none of your bussiness", correct: false },
      { Text: "never", correct: false },
    ],
  },
];
const questionelement = document.getElementById("quiz");
const answersButton = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;
function startquiz() {
  currentquestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showquestion();
}
function showquestion() {
  let currentquestion = question[currentquestionIndex];
  let questionNo = currentquestion + 1;
  questionelement.innerHTML = questionNo + "," + currentquestion.question;
  currentquestion.answers.forEach((answer) => {
    const Button = document.cresteElement("button");
    Button.innerHTML = answer.Text;
    answersButton.appendChild(button);
  });
}
startquiz();