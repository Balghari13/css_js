const containerEl = document.querySelector('.container')
const containerPopup = document.querySelector('.popup-container')
const btn = document.querySelector('.btn')
const closeDiv = document.querySelector('.close-icon')

btn.addEventListener('click',()=>{
    containerEl.classList.add('active')
    containerPopup.classList.remove('active')
})
closeDiv.addEventListener('click',()=>{
    containerPopup.classList.add('active')
    containerEl.classList.remove('active')
})