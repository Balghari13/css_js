const tabs = document.querySelector(".tabs");
const buttonEl = document.querySelectorAll(".button");
const contentEl = document.querySelectorAll(".content");
tabs.addEventListener('click',(e)=>{
   const id =e.target.dataset.id
   if(id){
    buttonEl.forEach(btn=>{
        btn.classList.remove('live')
       })
       e.target.classList.add('live')
       contentEl.forEach(add=>{
        add.classList.remove("live")
       })
   }
   
   const element = document.getElementById(id)
   element.classList.add('live')
})


