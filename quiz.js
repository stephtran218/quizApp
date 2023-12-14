const startButtonElement = document.getElementById("startButton");
const quizHeaderElement = document.querySelector(".quizHeader")
const questionsElement = document.getElementById("questionsBox");

const quizContent = [
    {
        question: "How many Grammys does Olivia Rodrigo have?",
        options:[
            {option: "2", correct: false},
            {option: "3", correct: true},
            {option: "1", correct: false},
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
            {option1: "2", correct: true},
            {option2: "1", correct: false},
            {option3: "4", correct: false},
            {option4: "3", correct: false}
        ]
    },
    {
        question: "What was Olivia Rodrigo’s debut song?",
        options: [
            {option1: "All I Want", correct: false},
            {option2: "Good 4 U", correct: false},
            {option3: "deja vu", correct: true},
            {option4: "drivers license", correct: false},
        ]
    },
    {
        question: "What movie did Olivia Rodrigo write “Can’t Catch Me Now” for?",
        options: [
            {option1: "Divergent", correct: false},
            {option2: "The Hunger Games: The Ballad of Songbirds & Snakes", correct: true},
            {option3: "Red, White, and Royal Blue", correct: false},
            {option4: "To All the Boys I’ve Loved Before", correct: false}
        ]
    },
    {
        question: "What was Olivia Rodrigo’s first album called?",
        options: [
            {option1: "GUTS", correct: false},
            {option2: "Good Riddance", correct: false},
            {option3: "SOUR", correct: true},
            {option4: "Red", correct: false}
        ]
    },
    {
        question: "What is Olivia Rodrigo’s motif?",
        options: [
            {option1: "Butterflies", correct: true},
            {option2: "Bows", correct: false},
            {option3: "Stars", correct: false},
            {option4: "Cherries", correct: false}
        ]
    },
    {
        question: "Where is Olivia Rodrigo from?",
        options: [
            {option1: "Temecula, CA", correct: true},
            {option2: "New York City, CA", correct: false},
            {option3: "San Francisco, CA", correct: false},
            {option4: "Salt Lake City, UT", correct: false}
        ]
    },
    {
        question: "How old is Olivia Rodrigo?",
        option1: "17",
        option2: "20",
        option3: "19",
        option4: "21",
    },
    {
        question: "Which singer is Olivia Rodrigo’s best friend?",
        option1: "Sabrina Carpenter",
        option2: "SZA",
        option3: "Lorde",
        option4: "Conan Gray",
    },
];

let currentQuestionIndex = 0;


function startQuiz(){

    startButtonElement.style.display = "none";
    questionsElement.style.display = "flex";

    const buttons = document.querySelectorAll(".optionStyle");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", nextQuestion)
    }
    appearQuestions();
    
}

function appearQuestions(){

    let currentQuestion = quizContent[currentQuestionIndex]
        // const optionsContainer = document.createElement("div");
    // optionsContainer.classList.add("optionsDesign");
    // quizHeaderElement.innerHTML = currentQuestion.question;


    // const firstOption = document.createElement("button");
    // firstOption.classList.add("optionSizing");
    // firstOption.innerText = currentQuestion.option1;

    // const secondOption = document.createElement("button");
    // secondOption.classList.add("optionSizing");
    // secondOption.innerText = currentQuestion.option2;    

    // const thirdOption = document.createElement("button");
    // thirdOption.classList.add("optionSizing");
    // thirdOption.innerText = currentQuestion.option3;

    // const fourthOption = document.createElement("button");
    // fourthOption.classList.add("optionSizing");
    // fourthOption.innerText = currentQuestion.option4;   
    
    // optionsContainer.appendChild(quizHeaderElement)
    // optionsContainer.appendChild(firstOption);
    // optionsContainer.appendChild(secondOption);
    // optionsContainer.appendChild(thirdOption);
    // optionsContainer.appendChild(fourthOption);

    // document.body.appendChild(optionsContainer);
}


function nextQuestion(){
    currentQuestionIndex++;

    if(currentQuestionIndex < quizContent.length){
        currentQuestion = quizContent[currentQuestionIndex];
        appearQuestions();
    } else {
        quizHeaderElement.innerHTML = "You got:"
    }
}

startButtonElement.addEventListener("click", startQuiz);
