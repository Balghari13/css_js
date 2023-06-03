const bgImageScroll = document.getElementById('bg-image')

window.addEventListener('scroll', ()=>updateScroll())

const updateScroll =()=>{
    bgImageScroll.style.opacity = 1- window.pageYOffset/1000;
    bgImageScroll.style.backgroundSize = 160- window.pageYOffset/6 +"%"
}