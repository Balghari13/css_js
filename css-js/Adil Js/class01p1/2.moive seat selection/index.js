const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
let ticketPrice = +movieSelect.value;


function updatSelectedCount(){
    const getSeats = document.querySelectorAll('.row .seat.selected');
    //for index to store locally
    const seatsIndex = [...getSeats].map(seat=>[...seats].indexOf(seat)) 
    
    const seatCount = getSeats.length;
    count.innerText = seatCount;
    total.innerText = seatCount*ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
}
//save movie to local storage
function setMovieData(movieIndex, moviePrice){
 localStorage.setItem('movieIndex', movieIndex);
 localStorage.setItem('moviePrice', moviePrice)
}
//get local storage data
function populateUI(){
 const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
 if(selectedSeats !== null && selectedSeats.length>0){
    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index)> -1){
            seat.classList.add('selected')
        }
    })
 }
 const selectMovie = localStorage.getItem('movieIndex');
 if(selectMovie !== null){
    movieSelect.selectedIndex = selectMovie;
 }
}


//for seats
container.addEventListener('click', e=>{
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updatSelectedCount();
       
    }
})
//for movie selector
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    //local storgae
    setMovieData(e.target.selectedIndex, e.target.value)
    updatSelectedCount();
})

//initial count & total
updatSelectedCount()