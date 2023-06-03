const containerImg = document.querySelector('.container-image')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
updateImage()
})

const updateImage = ()=>{
    for(let i=0; i<10; i++){
        const imageEl = document.createElement('img');
        imageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        containerImg.appendChild(imageEl)
    }

}