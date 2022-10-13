let startPageEl = document.querySelector("#start-page");
let quizPageEl = document.querySelector("#quiz-page");
let endPageEl = document.querySelector("#end-page");
let highscorePageEl = document.querySelector("#highscore-page");

let timerEl = document.querySelector("#time-left");
let startBtn = document.querySelector("#start-btn")
let scoreLinkEl = document.querySelector("#highscore-page")

let questionEl = document.querySelector("#question");
let choice1El = document.querySelector("#choice1");
let choice2El = document.querySelector("#choice2");
let choice3El = document.querySelector("choice3");
let choice4El = document.querySelector("#choice4");
let answerListEl = [choice1El, choice2El, choice3El, choice4El];
let answerStateEl = document.querySelector("#answer-state");

let scoreValEl = document.querySelector("#finalScore");
let initInput = document.querySelector("#initals-input");
let saveScoreBtn = document.querySelector("#save-btn");

let scoreListEl = document.querySelector("#score-list");
let homeBtn = document.querySelector("#home-btn");

let initial = localStorage.getItem("inital");
let score = localStorage.getItem("score");

const questionSet = [
    {
        question: 'Javascript is an _______ language?',
        choice1: 'Object-Oriented',
        choice2: 'Object-Based',
        choice3: 'Procedural',
        choice4: 'None of the above',
        answer: choice1El
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choice1: 'var',
        choice2: 'let',
        choice3: 'Both A and B',
        choice4: 'None of the above',
        answer: choice3El
    },

    {
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        choice1: 'document.write()',
        choice2: 'console.log()',
        choice3: 'window.alert()',
        choice4: 'All of the above',
        answer: choice4El
    },
    {
        question: 'What does the toLocateString() method do in JS?',
        choice1: 'Returns a localised object representation',
        choice2: 'Returns a parsed string',
        choice3: 'Returns a localized string representation of an object',
        choice4: 'None of the above',
        answer: choice3El
    },
    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choice1: 'stringify()',
        choice2: 'parse()',
        choice3: 'convert()',
        choice4: 'None of the above',
        answer: choice1El
    }
]

let index = 0;
let timeLeft = 75;
let clockid;

function startQuiz() {
    startPageEl.classList.add("hide");
    quizPageEl.classList.remove("hide");
    clockid = setInterval(countDown, 1000);
    displayQuestion();
}

function countDown() {
    if (timeLeft <= 0 && index < questionSet.length - 1) {
        clearInterval(clockid)
        timeLeft = 0;
        displayEnd();
    } else if (questionSet.length === index) {
        clearInterval(clockid);
        displayEnd();
    } else {
        timerEl.textContent = timeLeft;
        timeLeft--;
    }
}

function displayQuestion() {
    questionEl.textContent = questionSet[index].question
    choice1El.textContent = questionSet[index].choice1
    choice2El.textContent = questionSet[index].choice2
    choice3El.textContent = questionSet[index].choice3
    choice4El.textContent = questionSet[index].choice4
}

function nextQuestion() {
    index++;
    displayQuestion();
}

function wrongAnswer() {
    timeLeft -= 15;
}

function answerCheck(event) {
    if (event.target === questionSet[index].answer) {
        answerStateEl.textContent = "Correct!"
        nextQuestion();
    } else {
        answerStateEl.textContent = "Wrong"
        wrongAnswer();
    }
}

function displayEnd() {
    answerStateEl.textContent = "";
    endPageEl.classList.remove("hide");
    quizPageEl.classList.add("hide");
    scoreValEl.textContent = timeLeft;
    timerEl.textContent = 0;
}

let scoreboardCounter = 1;

function setStorage() {
    let scoreListItem = document.createElement("li")

    let scoreVal = scoreValEl.textContent;
    let initVal = initInput.value;

    localStorage.setItem("initial", initVal);
    localStorage.setItem("score", scoreVal);
    scoreListItem.innerText = scoreboardCounter + ". Initials: " + initVal + "\n  Score: " + scoreVal;
    scoreListEl.append(scoreListItem);
    scoreboardCounter++;
}

function displayHighScores() {
    startPagerEl.classList.add("hide");
    endPageEl.classList.add("hide");
    quizPageEl.classList.add("hide")
    highscorePageEl.classList.remove("hide");
    answerStateEl.textContent = "";
    clearInterval(clockid);
}

function saveAndSetScore() {
    setStorage();
    displayHighScores();
}

function goHome() {
    highscorePageEl.classList.add("hide");
    startPageEl.classList.remove("hide");
    timeLeft = 75;
    index = 0;
}

function clearStorage() {
    localStorage.removeItem("initial");
    localStorage.removeItem("score");
    scoreListEl.textContent = "";
    scoreboardCounter = 1;
}

scoreLinkEl.addEventListener("click", displayHighScores)

startBtn.addEventListener("click", startQuiz);

choice1El.addEventListener("click", answerCheck)
choice2El.addEventListener("click", answerCheck)
choice3El.addEventListener("click", answerCheck)
choice4El.addEventListener("click", answerCheck)

saveScoreBtn.addEventListener("click", saveAndSetScore);

homeBtn.addEventListener("click", goHome);