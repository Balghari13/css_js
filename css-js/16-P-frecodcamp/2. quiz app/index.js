// const num1 = Math.ceil(Math.random()*10);
// const num2 = Math.ceil(Math.random()*10);


// const questionElem = document.getElementById('question');

// questionElem.innerText = `What is ${num1} multiply of ${num2}?`
// let score = JSON.parse(localStorage.getItem('score'));
// if(!score){
//     score = 0;
// }
// const correctAns = num1*num2;

// const formElem = document.getElementById('form')
// const inputElem = document.getElementById('input')

// formElem.addEventListener('submit', ()=>{
//     const userAns = +input.value;
//     if(userAns===correctAns){
//     score++;
//     updateLocalScore()

//     }else{
//         score--
//         updateLocalScore()
//     }
// })

// function updateLocalScore(){
//     localStorage.setItem('score', JSON.stringify(score));
// }

// const scoreElm = document.getElementById('score');

// scoreElm.innerText = `score: ${score}`



const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const correctAns = num1*num2;
const questionElem = document.getElementById('question');

questionElem.innerText = `What is ${num1} multiply of ${num2}?`
let score= JSON.parse(localStorage.getItem('score'))
if(!score){
    score=0;
}

const scoreElm = document.getElementById('score')
scoreElm.innerText = `score: ${score}`
const formElem = document.getElementById('form')
const inputElem = document.getElementById('input')

formElem.addEventListener('submit', ()=>{
    const userAns = +input.value;
    if(userAns===correctAns){
    score++;
    updateLocalStorage()

    }else{
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score))
}