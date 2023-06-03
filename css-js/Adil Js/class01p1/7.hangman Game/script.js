const word = document.getElementById('word')
const incorrectLetters = document.getElementById('incorrect-letters')
const popup = document.getElementById('popup')
const finalMessage = document.getElementById('final-message')
const playBtn = document.getElementById('play-btn')
const notification = document.getElementById('notification-container')

//Dom elements for hangman
const figureParts = document.querySelectorAll('.figure-part')

//words to select for random word
const words = ['bad','no']

//select random word
let selectedWord = words[Math.floor(Math.random()*words.length)]

//tracking arrays for correct & incorrect guesses
let correctLetterArray = [];
let incorrectLetterArray = [];

//function to display the selected words in DOM
function displayWord(){
    word.innerHTML = `${selectedWord
        .split('')
        .map(letter=>(
        `<span class='letter'>
            ${correctLetterArray.includes(letter)? letter : ''}
        </span>`
     ))
     .join('')
}`
const innerWord = word.innerText.replace(/\n/g,'')

if(innerWord===selectedWord){
    finalMessage.innerText='Congratulation you win'
    popup.style.display='flex'
}
};

function showNotification(){
//show notification
    notification.classList.add('show')
    //after 2sec hide notification
    setTimeout(()=>{
        notification.classList.remove('show')
    },2000)
}

function updateIncorrectLetters(){
    //display the incorrect letters
    incorrectLetters.innerHTML=`
    ${incorrectLetterArray.length>0 ? '<p>Incorrec Letters</p>':''}
    ${incorrectLetterArray.map(letter=>`<span>${letter}</span>`)}
    `;
    //display the hangman part
    figureParts.forEach((part,index)=>{
        //how many incorect has user entered
        const errors = incorrectLetterArray.length;
        if(index<errors){
            part.style.display='block'
        }else{
            part.style.display='none'
        }
    })
    //check if user lost
    if(incorrectLetterArray.length===figureParts.length){
        finalMessage.innerText = 'You Lost!';
        popup.style.display = 'flex'
    }
}


///event listner for keyboard for keypress
window.addEventListener('keydown', e=>{
    //check if key is pressed is a letter a= 65, z=90
    if(e.keyCode>=65 && e.keyCode<=90){
        const letter = e.key;
        //check if letter is in selected word
        if(selectedWord.includes(letter)){
            //check if letter is already in correct letter array
            if(!correctLetterArray.includes(letter)){
                correctLetterArray.push(letter)
                //run the displayword function
                displayWord()
            }
            else{
                showNotification()
        }
        }else{
            //check if letter is already in incorrectLetterArray
            if(!incorrectLetterArray.includes(letter)){
                incorrectLetterArray.push(letter)
                //update the incorrect letters
                updateIncorrectLetters();
            }else{
                showNotification()
            }
        }
    }
})
//play again
playBtn.addEventListener('click', ()=>{
    //empty correct & incorrect letter array
    correctLetterArray.splice(0);
    incorrectLetterArray.splice(0);
    // //select new random word
    selectedWord= words[Math.floor(Math.random()*words.length)]
    // //clear incorrect letters display
    updateIncorrectLetters();
    //hide popup
    popup.style.display='none'
    //update UI
    displayWord();
})


displayWord()