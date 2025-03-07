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

const submitBtn = document.querySelector(".submit-btn");

const questionEle = document.querySelector(".question");
const answer1Ele = document.querySelector(".answer1");
const answer2Ele = document.querySelector(".answer2");
const answer3Ele = document.querySelector(".answer3");
const answer4Ele = document.querySelector(".answer4");

let currentQuestion = 0;
let score = 0;

updateQA();

function updateQA() {
  questionEle.innerText = quizQA[currentQuestion].question;
  answer1Ele.innerText = quizQA[currentQuestion].ans1text;
  answer2Ele.innerText = quizQA[currentQuestion].ans2text;
  answer3Ele.innerText = quizQA[currentQuestion].ans3text;
  answer4Ele.innerText = quizQA[currentQuestion].ans4text;
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let checkedAnswer = document.querySelector('input[type="radio"]:checked');

  if (checkedAnswer === null) {
    alert("Please Select an Answer");
  } else {
    if (
      checkedAnswer.nextElementSibling.innerText ===
      quizQA[currentQuestion].isAnswer
    ) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQA.length) {
      updateQA();
      checkedAnswer.checked = false;
    } else {
      alert(`You got ${score} out of ${quizQA.length} correct`);
      location.reload();
    }
  }
});
