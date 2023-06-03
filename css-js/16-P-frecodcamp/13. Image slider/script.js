const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')
const imageContainer = document.querySelector('.container-image')
const imageTag = document.querySelectorAll('img')
let currentImg = 1
let timeout;
updateImg()
nextEl.addEventListener('click',()=>{
    currentImg++
    clearTimeout(timeout)
    updateImg()
})
prevEl.addEventListener('click',()=>{
    currentImg--;
    clearTimeout(timeout)
    updateImg();
})
function updateImg(){
    if(currentImg>imageTag.length){
        currentImg=1;
    }else if(currentImg<1){
        currentImg=imageTag.length;
    }
    imageContainer.style.transform = 
    `translateX(-${(currentImg-1)*500}px)`

    timeout = setTimeout(()=>{
        currentImg++
        updateImg()
    },3000)
}