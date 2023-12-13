const startButtonElement = document.getElementById("startButton");
const quizHeaderElement = document.querySelector(".quizHeader")

const quizContent = [
    {
        question: "How many Grammys does Olivia Rodrigo have?",
        option1: "2",
        option2: "3",
        option3: "1",
        option4: "5",
    },
    {
        question: "Which show(s) has Olivia Rodrigo been in?",
        option1: "Bizaardvark",
        option2: "High School Musical The Musical The Series",
        option3: "Both of these",
        option4: "None of these",
    },
    {
        question: "How many albums does Olivia Rodrigo have?",
        option1: "2",
        option2: "1",
        option3: "4",
        option4: "3",
    },
    {
        question: "What was Olivia Rodrigo’s debut song?",
        option1: "All I Want",
        option2: "Good 4 U",
        option3: "deja vu",
        option4: "drivers license",
    },
    {
        question: "What movie did Olivia Rodrigo write “Can’t Catch Me Now” for?",
        option1: "Divergent",
        option2: "The Hunger Games: The Ballad of Songbirds & Snakes",
        option3: "Red, White, and Royal Blue",
        option4: "To All the Boys I’ve Loved Before",
    },
    {
        question: "What was Olivia Rodrigo’s first album called?",
        option1: "GUTS",
        option2: "Good Riddance",
        option3: "SOUR",
        option4: "Red",
    },
    {
        question: "What is Olivia Rodrigo’s motif?",
        option1: "Butterflies",
        option2: "Bows",
        option3: "Stars",
        option4: "Cherries",
    },
    {
        question: "Where is Olivia Rodrigo from?",
        option1: "Temecula, CA",
        option2: "New York City, CA",
        option3: "San Francisco, CA",
        option4: "Salt Lake City, UT",
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
let currentQuestion = quizContent[currentQuestionIndex]

function appearQuestions(){
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("optionsDesign");

    const firstOption = document.createElement("p");
    firstOption.classList.add("optionStyle");
    firstOption.innerText = currentQuestion.option1;

    const secondOption = document.createElement("p");
    secondOption.classList.add("optionStyle");
    secondOption.innerText = currentQuestion.option2;    

    const thirdOption = document.createElement("p");
    thirdOption.classList.add("optionStyle");
    secondOthirdOptionption.innerText = currentQuestion.option3;  

    const fourthOption = document.createElement("p");
    fourthOption.classList.add("optionStyle");
    fourthOption.innerText = currentQuestion.option4;   
    
    optionsContainer.appendChild(firstOption);
    optionsContainer.appendChild(secondOption);
    optionsContainer.appendChild(thirdOption);
    optionsContainer.appendChild(fourthOption);

    document.body.appendChild(optionsContainer);
}
function startQuiz(){
    quizHeaderElement.innerHTML = question
}

startButtonElement.addEventListener("click", startQuiz)