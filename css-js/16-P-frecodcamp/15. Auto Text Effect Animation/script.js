const containerEl = document.querySelector('.container')

const careers = ['Youtuber','Web Dev', 'App Dev', 'Teacher']
let careerIndex = 0;
let charIndex = 0;
updateCarrers()
function updateCarrers(){
    charIndex++
    containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0,1)==="A"?"an":"a" }
      ${careers[careerIndex].slice(0,charIndex)} </h1>
    `
    
    if(charIndex === careers[careerIndex].length){
        careerIndex++;
        charIndex=0;
    }
    if(careerIndex===careers.length){
        careerIndex=0;
    }
    setTimeout(updateCarrers, 400)
}


89
