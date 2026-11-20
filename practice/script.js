const startBtn=document.getElementById("start-btn");
const startPage=document.getElementById("start-page");
const quizPage=document.getElementById("quiz-page");
const resultPage=document.getElementById("result-page");
const questionText=document.getElementById("question-text");
const choiceContainer=document.getElementById("choice-container");
const maxScoreSpan=document.getElementById("max-score");
const scoreSpan=document.getElementById("score");
const message=document.getElementById("message");
const restartBtn=document.getElementById("restart-btn");

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
restartBtn.addEventListener("click",restartQuiz);

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
      currentQuestionIndex=0;
      score=0;
      startPage.classList.remove("active");
      quizPage.classList.add("active");
      showQuestion();
}
function restartQuiz(){
     resultPage.classList.remove("active");
     startQuiz();
}

function showQuestion(){
    let currentQuestion=quizQuestions[currentQuestionIndex];
    choiceContainer.innerHTML="";
    questionText.textContent=currentQuestion.questionText;
    currentQuestion.choices.forEach(function(choice){
      const button=  document.createElement("button");
      button.textContent=choice.choiceText;
      button.dataset.isCorrect=choice.correct;
      choiceContainer.appendChild(button);
      button.addEventListener("click",selectAnswer);
    })

    
}

function selectAnswer(e){
       if(e.target.dataset.isCorrect==="true"){
         score++;
         e.target.classList.add("correct");
       }
       else{
         e.target.classList.add("incorrect");
       }
      setTimeout(()=>{
          if(currentQuestionIndex<quizQuestions.length-1){
          currentQuestionIndex++;
          showQuestion();
       }
       else{
          showResults();
       } }, 2000)

      Array.from(choiceContainer.children). forEach(button=>
       { button.disabled=true;}
       )

}

function showResults(){
    quizPage.classList.remove("active");
    resultPage.classList.add("active");
    scoreSpan.textContent=score;
    maxScoreSpan.textContent=quizQuestions.length;
    if(score>(0.8*quizQuestions.length)){
        message.textContent="Excellent work!"
    }
    else if(score>(0.5*quizQuestions.length)){
        message.textContent="Good job."
    }
    else{
        message.textContent="Retry the quiz please."
    }
}