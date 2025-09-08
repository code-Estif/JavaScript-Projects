const questions = [
  { q: "Which operator is used for strict equality?", a: "===" },
  { q: "What keyword starts a conditional statement?", a: "if" },
  { q: "Which loop repeats until a condition is false?", a: "while" },
  { q: "How do you declare a function using arrow syntax?", a: "arrow" },
  { q: "Which logical operator means AND?", a: "&&" }
];

let score = 0;
let current = 0;

// Function to show a question
function showQuestion() {
  if (current >= questions.length) {
    document.getElementById("quiz").innerHTML = "<h2>Quiz Finished!</h2>";
    document.getElementById("score").innerText = "Your score: " + score + "/" + questions.length;
    return;
  }

  const q = questions[current];
  document.getElementById("quiz").innerHTML = `
    <div class="question"><strong>Q${current+1}:</strong> ${q.q}</div>
    <input type="text" id="answer" placeholder="Type your answer here">
    <button class="btn" onclick="checkAnswer()">Submit</button>
  `;
}

// Function to check answer (callback example)
const checkAnswer = () => {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = questions[current].a.toLowerCase();

  // Using logical operators for flexible answers
  if ((userAnswer === correctAnswer) || (correctAnswer === "arrow" && userAnswer === "=>")) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! Correct answer: " + questions[current].a);
  }

  current++;
  showQuestion();
}

// Start quiz
showQuestion();