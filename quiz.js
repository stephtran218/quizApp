const startButtonElement = document.getElementById("startButton");
const quizHeaderElement = document.querySelector(".quizHeader")
const questionsElement = document.getElementById("questionsBox");
const nextButtonElement = document.getElementById("next-btn")

const quizContent = [
    {
        question: "How many Grammys does Olivia Rodrigo have?",
        options:[
            {option: "2", correct: false},
            {option: "3", correct: true},
            {option:"1", correct: false},
            {option: "5", correct:false}
        ]
    },
    {
        question: "Which show(s) has Olivia Rodrigo been in?",
        options: [
            {option: "Bizaardvark", correct: false},
            {option: "High School Musical The Musical The Series", correct: false},
            {option: "Both of these", correct: true},
            {option: "None of these", correct: false}
        ]
    },
    {
        question: "How many albums does Olivia Rodrigo have?",
        options: [
            {option: "2", correct: true},
            {option: "1", correct: false},
            {option: "4", correct: false},
            {option: "3", correct: false}
        ]
    },
    {
        question: "What was Olivia Rodrigo’s debut song?",
        options: [
            {option: "All I Want", correct: false},
            {option: "Good 4 U", correct: false},
            {option: "deja vu", correct: false},
            {option: "drivers license", correct: true},
        ]
    },
    {
        question: "What movie did Olivia Rodrigo write “Can’t Catch Me Now” for?",
        options: [
            {option: "Divergent", correct: false},
            {option: "The Hunger Games: The Ballad of Songbirds & Snakes", correct: true},
            {option: "Red, White, and Royal Blue", correct: false},
            {option: "To All the Boys I’ve Loved Before", correct: false}
        ]
    },
    {
        question: "What was Olivia Rodrigo’s first album called?",
        options: [
            {option: "GUTS", correct: false},
            {option: "Good Riddance", correct: false},
            {option: "SOUR", correct: true},
            {option: "Red", correct: false}
        ]
    },
    {
        question: "What is Olivia Rodrigo’s motif?",
        options: [
            {option: "Butterflies", correct: true},
            {option: "Bows", correct: false},
            {option: "Stars", correct: false},
            {option: "Cherries", correct: false}
        ]
    },
    {
        question: "Where is Olivia Rodrigo from?",
        options: [
            {option: "Temecula, CA", correct: true},
            {option: "New York City, CA", correct: false},
            {option: "San Francisco, CA", correct: false},
            {option: "Salt Lake City, UT", correct: false}
        ]
    },
    {
        question: "How old is Olivia Rodrigo?",
        options: [
            {option: "17", correct: false},
            {option: "20", correct: true},
            {option: "19", correct: false},
            {option: "21", correct: false}
        ]
    },
    {
        question: "Which singer is Olivia Rodrigo’s best friend?",
        options: [
            {option: "Sabrina Carpenter", correct: false},
            {option: "SZA", correct: false},
            {option: "Lorde", correct: false},
            {option: "Conan Gray", correct: true}
        ]
    },
];

let currentQuestionIndex = 0;
const buttons = document.querySelectorAll(".option");
let currentQuestion = quizContent[currentQuestionIndex];
let optionPicked = false;
let correctAnswers = 0;


function startQuiz(){

    startButtonElement.style.display = "none";
    questionsElement.style.display = "flex";
    nextButtonElement.style.display = "flex";


    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", checkAnswer)
    }
    appearQuestions();
    
}

function checkAnswer(event){
    let objectIndex = -1;
    let answerPicked = event.target;
    for(let i = 0; i < currentQuestion.options.length; i++){
        if(answerPicked.innerText === currentQuestion.options[i].option){
            objectIndex = i; 
        }
    }
    console.log(answerPicked)
    if(!optionPicked){
        console.log("help")
        if(currentQuestion.options[objectIndex].correct){
            answerPicked.style.backgroundColor = "green";
            correctAnswers++;
        }else{
            answerPicked.style.backgroundColor = "red";
        }
    }
    
    optionPicked = true;
}


function appearQuestions(){

    quizHeaderElement.innerText = currentQuestion.question;

    for(let i = 0; i < buttons.length; i++){
        buttons[i].innerText = currentQuestion.options[i].option;
    }


}


function nextQuestion(){
    currentQuestionIndex++;

    if(currentQuestionIndex < quizContent.length){
        currentQuestion = quizContent[currentQuestionIndex];
        optionPicked = false;
        for(let i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = "rgb(180, 116, 180)"
        }
        appearQuestions();
    } else {
        const totalQuestions = quizContent.length;
        const percentage = (correctAnswers / totalQuestions) *100;
        quizHeaderElement.innerHTML = "You got: " + percentage.toFixed(2) + "%";
    }
}

startButtonElement.addEventListener("click", startQuiz);
nextButtonElement.addEventListener("click", nextQuestion)
