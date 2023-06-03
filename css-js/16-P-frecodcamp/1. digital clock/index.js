// const hoursEl = document.getElementById('hours');
// const minsEl = document.getElementById('minutes');
// const secEl = document.getElementById('seconds');
// const ampmEl = document.getElementById('ampm');

// function updateClock(){
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let ampm = 'AM'
// if(h>12){
//     h = h-12;
//     ampm = "PM"
// }
//     h = h < 10 ? "0"+h : h ;

//     hoursEl.innerText = h;
//     minsEl.innerText = m;
//     secEl.innerText = s;
//     ampmEl.innerText = ampm;

// setTimeout(()=>{
//     updateClock();
// }, 100)
   

// }

// updateClock();

const hours = document.getElementById('hours')
const mins = document.getElementById('min')
const sec = document.getElementById('sec')
const ampm = document.getElementById('ampm')

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = 'am'

    if(h>12){
     h = h-12;
      ap= "pm"
    }
    h = h>10? h : '0'+h;
    m = m>10? m : '0'+m;
    s = s>10? s : '0'+s;

    hours.innerText=h;
    mins.innerText=m;
    sec.innerText=s
    ampm.innerText=ap



setTimeout(()=>{
updateClock()
},100)
}

updateClock();