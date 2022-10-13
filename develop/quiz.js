//container selectors 
let startPageContainerEl = document.querySelector("#start-page-container");
let quizContainerEl = document.querySelector("#quiz-container");
let summaryContainerEl = document.querySelector("#summary-container");
let highscoreContainerEl = document.querySelector("#highscore-page");

// timer selector and start page start btn selector (for dynamic header and strtpage element selectors)
let timerEl = document.querySelector("#time-left");
let startQuizBtn = document.querySelector("#start-quiz-button");
let scoreLinkEl = document.querySelector("#highscore-link")

// quiz container element selectors


// summary container element selectors 


// highscore page container element selectors


// local storage getters


// q&a set for quiz
let questions = [
    {
        question: 'Javascript is an _______ language?',
        choice1: 'Object-Oriented',
        choice2: 'Object-Based',
        choice3: 'Procedural',
        choice4: 'None of the above',
        answer: '1'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choice1: 'var',
        choice2: 'let',
        choice3: 'Both A and B',
        choice4: 'None of the above',
        answer: '3'
    },

    {
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        choice1: 'document.write()',
        choice2: 'console.log()',
        choice3: 'window.alert()',
        choice4: 'All of the above',
        answer: '4'
    },
    {
        question: 'What does the toLocateString() method do in JS?',
        choice1: 'Returns a localised object representation',
        choice2: 'Returns a parsed string',
        choice3: 'Returns a localized string representation of an object',
        choice4: 'None of the above',
        answer: '3'
    },
    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choice1: 'stringify()',
        choice2: 'parse()',
        choice3: 'convert()',
        choice4: 'None of the above',
        answer: '1'
    }
]

// index for questionSet array, timeLeft used for timer, clockid for setInterval


// starts quiz and will use following functions:countDown(), displayQuestion(), nextQuestion(), wrongAnswer()


/* triggered when startQuiz button is clicked, used for setInterval parameter
  function toggles timer off and on depending on such conditions:
    - if time is <=0 and the questionSet is incomplete, clear timer, timeLeft is now assigned 0, and displaySummary is called
    - otherwise if the questionSet at current index is equal to the q&a length, clear timer and displaySummary
    - otherwise, run timer 
*/


// function to display appropriate questions and answers according to questionSet index


// 1 of 2 functions used in answerCheck (toggles next question to display)


// 2 of 2 functions used in answerCheck (if answer incorrect, subtract 15s from timer)


/* this function states: 
  - if the element that was clicked on matches the value paired with the answer key, toggle next question and show correct. 
  - otherwise, display wrong and trigger wrongAnswer function */


// resets dynamic text elements answerState and timer to default, and assigns the scoreVal element to the time left at the end of the quiz

// creates the list item for initials and score after quiz and appends list item to the scoreList element (also sets localStorage items)


// when function needs to be called (from any section), applies hide class to all sections except highscore page to prevent bugs. also clears timer


// function used for when save button in summary page is clicked (sets storage and adds list item to score list) GOOD


// function called to go back to start page and reset quiz parameter defaults (timer and q&a set index)


// removes list items from score list, resets scoreboard counter, and clears local Storage items



// add event listeners for interactive HTML elements when clicked upon
