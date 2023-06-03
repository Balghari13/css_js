const menuToggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const model = document.getElementById('model')

menuToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click',()=>{
    model.classList.add('show')
})
close.addEventListener('click',()=>model.classList.remove('show'))