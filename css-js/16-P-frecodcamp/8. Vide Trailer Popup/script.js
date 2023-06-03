const tContainer = document.querySelector('.trailer-container')

const closeBtn = document.querySelector('.close-icon')
const video = document.querySelector('video')
const watchButton = document.querySelector('.btn')

watchButton.addEventListener('click',()=>{
    tContainer.classList.remove('active')
    
})
closeBtn.addEventListener('click',()=>{
    tContainer.classList.add('active')
    video.pause()
    video.currentTime=0
})



