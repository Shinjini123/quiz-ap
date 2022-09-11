const quiz=[{
question:"Q1.The default link colour for hyperlinks is:",
a:"grey",
b:"green",
c:"blue",
d:"yellow",
ans:"ans3"
},
{
    question:"Q2.Which property is used to change the background colour?",
    a:"bgcolor",
    b:"background-color",
    c:"bcolor",
    d:"background-colour",
    ans:"ans2"
},
{
    question:"Q3.HTML stands for what?",
    a:"Hypertrophic Management Language",
    b: "Hyperbaric Tertiary Logarithm",
    c: "Hypertext Markup Language",
    d: "Hyperresonant Marginal Logarithm",
    ans:"ans3"
},
{
    question:"Q4.Which of the following value of cursor shows it as crosshair or plus sign?",
    a:"crosshair",
    b:"default",
    c: "pointer",
    d:"move",
    ans:"ans1"
}];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');


const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion= () =>{
    const questionList=quiz[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;

}


  loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
if(curAnsElem.checked){
    answer=curAnsElem.id;
}
    });
    return answer;
};
const deselectAll =()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);

}


submit.addEventListener('click',()=>{
const checkedAnswer=getCheckAnswer();
console.log(checkedAnswer);
if(checkedAnswer===quiz[questionCount].ans){
    score++;
}
questionCount++;
deselectAll();
if(questionCount<quiz.length){
   
    loadQuestion();
}
else{
    showScore.innerHTML= `
    <h3>Your score is: ${score}/${quiz.length}</h3>

    `
    showScore.classList.remove('scoreArea');
}
});