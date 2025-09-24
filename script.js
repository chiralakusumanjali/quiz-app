const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Hyper Transfer Markup Language",
      "HighText Machine Language",
      "Hyperlink Text Management Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: 0
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "IBM"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionButtons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  if (selectedIndex === q.answer) {
    score++;
    optionButtons[selectedIndex].style.background = "#43cea2";
    optionButtons[selectedIndex].style.color = "white";
  } else {
    optionButtons[selectedIndex].style.background = "#e74c3c";
    optionButtons[selectedIndex].style.color = "white";
    optionButtons[q.answer].style.background = "#43cea2";
    optionButtons[q.answer].style.color = "white";
  }
  optionButtons.forEach(btn => btn.disabled = true);
}

optionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const index = parseInt(btn.dataset.index);
    checkAnswer(index);
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.textContent = `🎉 You scored ${score} / ${questions.length}`;
  }
});

// Load first question
loadQuestion();
