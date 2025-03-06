const quizQA = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    isAnswer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    isAnswer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    isAnswer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    isAnswer: "1995",
  },
];

const questionEl = document.querySelector(".question");
const answer1El = document.querySelector(".answer1");
const answer2El = document.querySelector(".answer2");
const answer3El = document.querySelector(".answer3");
const answer4El = document.querySelector(".answer4");
const submitBtn = document.querySelector(".submit-btn");

// const answerEls = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

updatingQA();

submitBtn.addEventListener("click", () => {
  let checkAnswer = document.querySelector('input[type="radio"]:checked');

  if (checkAnswer === null) {
    alert("Please Select an Answer");
  } else {
    if (
      checkAnswer.nextElementSibling.innerText ===
      quizQA[currentQuestion].isAnswer
    ) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQA.length) {
      updatingQA();
      checkAnswer.checked = false;
    } else {
      alert(`You got ${score} out of ${quizQA.length} correct`);
      location.reload();
    }
  }
});

function updatingQA() {
  questionEl.innerText = quizQA[currentQuestion].question;
  answer1El.innerText = quizQA[currentQuestion].ans1text;
  answer2El.innerText = quizQA[currentQuestion].ans2text;
  answer3El.innerText = quizQA[currentQuestion].ans3text;
  answer4El.innerText = quizQA[currentQuestion].ans4text;
}
