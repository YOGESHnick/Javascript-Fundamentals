const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which is the largest planet in the solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
  answered = false;
  nextButton.style.display = "none"; // Hide next button until answer is selected
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = ""; // Clear previous options
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.onclick = () => checkAnswer(option, button);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption, button) {
  if (answered) return; // Prevent multiple clicks
  answered = true;

  const correctAnswer = quizData[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
    button.style.backgroundColor = "lightgreen"; // Correct answer
  } else {
    button.style.backgroundColor = "lightcoral"; // Wrong answer
  }

  nextButton.style.display = "block"; // Show next button
}

nextButton.addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  nextButton.style.display = "none";
  resultElement.textContent = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion(); // Start the quiz
