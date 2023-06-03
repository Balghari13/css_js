const kits = ['crash','kick','snare','tom']

const containerEl = document.querySelector('.container');

kits.forEach(kit=>{
    const btnEl = document.createElement('button')
    btnEl.classList.add('btn')
    btnEl.innerText = kit
    btnEl.style.backgroundImage = 'url(image/'+kit+'.png)'
    containerEl.appendChild(btnEl)
    const audio = document.createElement('audio')
    audio.src = 'sounds/'+kit+'.mp3'
    containerEl.appendChild(audio)
    btnEl.addEventListener('click',()=>{
        audio.play();
    })
    window.addEventListener('keydown',(e)=>{
        if(e.key===kit.slice(0,1)){
            audio.play()
        btnEl.style.transform= "scale(.6)"
        setTimeout(()=>{
            btnEl.style.transform="scale(1)"
        },200)
        }
    })
})

