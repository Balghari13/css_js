const textarea = document.getElementById('textarea');
const totalCharacter = document.getElementById('total-character')
const remainigCharacter = document.getElementById('remaining-character')


textarea.addEventListener('keyup',()=>{
updateCounter()
})

function updateCounter(){
    totalCharacter.innerText = textarea.value.length;
    remainigCharacter.innerText = textarea.getAttribute('maxLength')-textarea.value.length;
}
updateCounter()
