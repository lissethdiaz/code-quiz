var questions = [{
    question: "The 'function' and 'var' are known as:",
    correctAnswer: "chB",
    choiceA: "Keywords",
    choiceB: "Declaration Statements",
    choiceC: "Prototypes",
    choiceD: "Data Types",
},
  {
    question: "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
    correctAnswer: "chC",
    choiceA: "Resstriction",
    choiceB: "Output Level",
    choiceC: "Scope",
    choiceD: "Range",
},
  {
    question: "What is a JavaScript element that represents either TRUE or FALSE values?",
    correctAnswer: "chA",
    choiceA: "Boolean",
    choiceB: "RegExp",
    choiceC: "Event",
    choiceD: "Condition",
},
  {
    question: "In JavaScript, what element is used to store multiple values in a single variable?",
    correctAnswer: "chA",
    choiceA: "Arrays",
    choiceB: "Variables",
    choiceC: "Functions",
    choiceD: "Strings",
}];

var quizInfo = document.querySelector("#quiz-info");
var startBtn = document.querySelector("#start-btn");

var timeLeft = document.querySelector("#time-left")

var quiz = document.querySelector("#quiz");

var question = document.querySelector("#question");

var chA = document.querySelector("#chA");
var chB = document.querySelector("#chB");
var chC = document.querySelector("#chC");
var chD = document.querySelector("#chD");
var choice = document.querySelector("#choice");
var choices = document.querySelector("#choices");

var highScore = document.querySelector("#highscore");
var yourScore = document.querySelector("#score");
var submitScore = document.querySelector("#submit-btn");
var initials = document.querySelector("#initials")

var i = 0
var countDown = 60
var time;

startBtn.addEventListener("click", () => {
  quizInfo.style.display = "none";
  quiz.style.display = "block";
  time = setInterval(timer, 1000)
});

var timer = function() {
  console.log(`Timer called ${--countDown}`);
  if(countDown === 0) {
    clearInterval(time)
    endQuiz()
  }


  timeLeft.innerText = countDown
}

var quizQuestion = function() {
    question.textContent = questions[i].question;
    chA.textContent = questions[i].choiceA;
    chB.textContent = questions[i].choiceB;
    chC.textContent = questions[i].choiceC;
    chD.textContent = questions[i].choiceD;

  };

quizQuestion();

  choices.addEventListener("click", (event) => {
    i++;
    if(i < questions.length) {
      var correctChoice = questions[i-1].correctAnswer
      var userChoice = event.id
      if(userChoice != correctChoice) {
        countDown = countDown -5
      }
      
      quizQuestion()
    } else {
      highScore.style.display = "block"
      quiz.style.display = "none"
      clearInterval(time)
      endQuiz()
    }
  })
  
  var endQuiz = function() {
    yourScore.textContent = countDown
    countDown = 60
    i = 0
  }

  submitScore.addEventListener("click", () => {
    localStorage.setItem(initials.value, yourScore.textContent)

  })




