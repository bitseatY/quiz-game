const startScreen=document.getElementById('start-screen');
const startBtn=document.getElementById('start-btn');
const quizScreen=document.getElementById('quiz-screen');
const questionText=document.getElementById('question-text');
const currentQuestionSpan=document.getElementById('current-question');
const totalQuestionSpan=document.getElementById('total-questions');
const scoreSpan=document.getElementById('score');
const answersContainer=document.getElementById('answers-container');
const progressBar=document.getElementById('progress-bar');
const resultScreen=document.getElementById('result-screen');
const finalScoreSpan=document.getElementById('final-score');
const resultMessage=document.getElementById('result-message');
const restartBtn=document.getElementById('restart-btn');
const maxScoreSpan=document.getElementById('max-score');


const quizQuestions=[
      {
        question:"what is the capital of france?",
        answers:[
            { text:"London", correct:false },
            { text:"Berlin", correct:false },
            { text:"Paris", correct:true },
            { text:"Madrid", correct:false }
        ]
      },
      {
        question:"which planet is known as the red planet?",
        answers:[
            { text:"Venus", correct:false },
            { text:"Mars", correct:true},
            { text:"Jupiter", correct:false },
            { text:"Saturn", correct:false }
        ]
      },
      {
        question:"what is the largest ocean on earth?",
        answers:[
            { text:"Atlantic Ocean", correct:false },
            { text:"Indian Ocean", correct:false},
            { text:"Arctic Ocean", correct:false },
            { text:"Pacific Ocean", correct:true }
        ]
      },
      {
        question:"which of the following isn't a programming language?",
        answers:[
            { text:"Java", correct:false },
            { text:"Python", correct:false},
            { text:"runner", correct:true },
            { text:"Javascript", correct:false }
        ]
      },
      {
        question:"what is the chemical symbol for gold?",
        answers:[
            { text:"Go", correct:false },
            { text:"Gd", correct:false},
            { text:"Au", correct:true },
            { text:"Ag", correct:false }
        ]
      }

]

let currentQuestionIndex=0;
let score=0;
let answersDisabled=false;

totalQuestionSpan.textContent=quizQuestions.length;
maxScoreSpan.textContent=quizQuestions.length;

startBtn.addEventListener("click",startQuiz);
restartBtn.addEventListener("click",restartQuiz);

function startQuiz(){
     currentQuestionIndex=0;
     score=0;
     scoreSpan.textContent=0;

     startScreen.classList.remove('active');
     quizScreen.classList.add('active');
     
     showQuestion();

}

function showQuestion(){
    answersDisabled=false;
    const currentQuestion=quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent=currentQuestionIndex+1;
    const progressPercent=(currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width=progressPercent + "%";
    questionText.textContent=currentQuestion.question;

    answersContainer.innerHTML="";
    currentQuestion.answers.forEach(answer=> {
      const button=document.createElement("button");
      button.textContent=answer.text;
      button.classList.add("answer-btn");
       button.dataset.correct=answer.correct;
       answersContainer.appendChild(button); 
        button.addEventListener("click",selectAnswer);
    });
    
    
   
}

function selectAnswer(event){
   
   answersDisabled=true;
   const selectedButton=event.target;
   const isCorrect=selectedButton.dataset.correct;
   
   
   Array.from(answersContainer.children).forEach(button=>{
    
       if(button.dataset.correct==="true")
          button.classList.add("correct");
        else if(button===selectedButton){
           button.classList.add("incorrect");
        }
   });
   if(isCorrect==="true"){
    score++;
   
   }
    scoreSpan.textContent=score;
   
   setTimeout(()=> {
     currentQuestionIndex++;
     if(currentQuestionIndex < quizQuestions.length){
        showQuestion()
     }
     else{
        showResults()
     }
   },1000);

  }

function showResults(){

  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent=score;
  const percentage=(score/quizQuestions.length)*100;
  if(percentage===100){
    resultMessage.textContent="perfect"
  }
  else{
    resultMessage.textContent="good"
  }
}

function restartQuiz(){
  resultScreen.classList.remove("active");
  startQuiz();
}