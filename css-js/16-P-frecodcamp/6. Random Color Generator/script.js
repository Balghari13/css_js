const containerEl = document.querySelector('.container');

for (let i=0; i<30; i++){
    const colorContainer = document.createElement('div');
    colorContainer.classList.add('color-container')
    containerEl.appendChild(colorContainer)
}
const colorContainerEl = document.querySelectorAll('.color-container')

function generateColor(){
    colorContainerEl.forEach(colors=>{
        const newColorCode = randomColor()
        console.log(newColorCode)
       colors.style.backgroundColor = "#"+newColorCode
       colors.innerText = "#"+newColorCode
    })
 
}
generateColor()

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = ''
    for(let i=0; i<6;i++){
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum, randomNum+1)
        // console.log(colorCode, randomNum)
       
    }
    return colorCode;
}
// randomColor()