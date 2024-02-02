question_list = [
    {
        question: "Who's assassination started WW1?",
        answers: ["A) Emperor Peter III", "B) Archduke Franz Ferdinand", "C) King George V", "D) Prince Von Stauffenberg"],
        CorrectAnswerIdx: 1,
        UserAnswer: -1
    },
    {
        question: "When did WW1 end?",
        answers: ["A) 1914", "B) 1928", "C) 1945", "D) 1918"],
        CorrectAnswerIdx: 3,
        UserAnswer: -1
    },
    {
        question: "Who was the British Prime Minister During WW2?",
        answers: ["A) Wilfrid Laurier", "B) Stanley Baldwin", "C) Winston Churchill", "D) Clement Atlee"],
        CorrectAnswerIdx: 2,
        UserAnswer: -1
    },
    {
        question: "Who was defeated in the battle of Waterloo in 1815?",
        answers: ["A) Marcus Aurelius", "B) Erwin Rommel", "C) Napoleon Bonaparte", "D) Arthur Wellesley"],
        CorrectAnswerIdx: 2,
        UserAnswer: -1
    }
    
];

let questionIndex = 0;

//This query Selectorys makes an array with all ".answer-button" tag it finds

function loadQuestion(){
    questionText = document.getElementById("question-text");
    answerButtons = document.querySelectorAll(".answer-button");

    questionText.textContent = question_list[questionIndex].question; 
    //Replace the Place holder question text with current question

    CurrentQuestion = question_list[questionIndex];

    for(let i = 0; i < answerButtons.length; i++){
        currentAnswerButton = answerButtons[i]
        currentAnswerButton.textContent = CurrentQuestion.answers[i];
    }
}

function nextQuestion(){
    if(questionIndex >= (question_list.length - 1)){
        window.alert("This is the last question, there is no next question");
    }else if(question_list[questionIndex].UserAnswer == -1){
        window.alert("Please select an answer before moving to the next question")
    }else{
        unpressButtons();
        questionIndex++;
        if(question_list[questionIndex].UserAnswer != -1){
            answerButtons[question_list[questionIndex].UserAnswer].classList.add("pressed")
        }
        loadQuestion();
    }
}  

function unpressButtons(){
    answerButtons = document.querySelectorAll(".answer-button");

    //Removes the pressed from the answer button tag, reverting them to the unpressed version in css
    for(let i = 0; i < answerButtons.length; i++){
        answerButtons[i].classList.remove("pressed");
    }
}

function selectAnswer(answerIndex) {
    //Unpressses all buttons and shows put the pressed tag on the newly pressed button
    unpressButtons();
    answerButtons[answerIndex].classList.add("pressed");
    question_list[questionIndex].UserAnswer = answerIndex;
}

function prevQuestion(){
    if(questionIndex <= 0){
        window.alert("This is the first question, there is no previous question");
    }else{
        questionIndex--;
        loadQuestion();

        unpressButtons();
        answerButtons[question_list[questionIndex].UserAnswer].classList.add("pressed");
    }  
}

function AllQuestionsAnswered(){
    QuestionsAnswered = true;
    for(let i = 0; i < question_list.length; i++){
        if(question_list[i].UserAnswer == -1){
            QuestionsAnswered = false;
        }
    } 
    return QuestionsAnswered;
}

function submitAnswers(){
    
    let score = 0;

    if(!AllQuestionsAnswered()){
        window.alert("Answer all questions before submitting");
    }else{
        for(let i = 0; i < question_list.length; i++){
            if(question_list[i].UserAnswer == question_list[i].CorrectAnswerIdx){
                score++;
            }
        } 
        window.alert("Your score is: " + score + "/4");
    }
    
}

//Loads first question
loadQuestion();


