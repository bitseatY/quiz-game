const { createElement } = require("react");

const startBtn=document.getElementById("start-btn");
const startPage=document.getElementById("start-page");
const quizPage=document.getElementById("quiz-page");
const resultPage=document.getElementById("result-page");
const questionText=document.getElementById("question-text");
const choiceContainer=document.getElementById("choice-container");

const quizQuestions=[
      {
        questionText:"what is the worlds tallest mountain?",
        choices:[
            {
                choiceText:"mt.kilimanjaro",
                correct:false
            },
            {
                choiceText:"mt.everest",
                correct:true
            },
            {
                choiceText:"mt.mangoto",
                correct:false
            },
            {
                choiceText:"mt.adama",
                correct:false
            }

        ]
      },
       {
        questionText:"what is the worlds longest river?",
        choices:[
            {
                choiceText:"amazon",
                correct:false
            },
            {
                choiceText:"nile",
                correct:true
            },
            {
                choiceText:"missisipi",
                correct:false
            },
            {
                choiceText:"omo",
                correct:false
            }

        ]
      }
      
]




startBtn.addEventListener("click",startQuiz);

let currentQuestionIndex=0;

function startQuiz(){
      currentQuestionIndex=0;
      startPage.classList.remove("active");
      quizPage.classList.add("active");
      showQuestion();
}

function showQuestion(){
     let currentQuestion=quizQuestions[currentQuestionIndex];
     questionText.textContent=currentQuestion.questionText;
     currentQuestion.choices.forEach(console.log("1"));
   



}