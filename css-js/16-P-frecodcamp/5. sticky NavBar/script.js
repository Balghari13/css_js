const navBarEl = document.querySelector('.navbar')
console.log(navBarEl.offsetHeight)
const bottomContainerEl = document.querySelector('.container-bottom')
console.log(bottomContainerEl.offsetTop)

window.addEventListener('scroll',()=>{
    if(window.scrollY>bottomContainerEl.offsetTop-navBarEl.offsetHeight-50){
        navBarEl.classList.add('active')
    }else{
        navBarEl.classList.remove('active')
    }
})