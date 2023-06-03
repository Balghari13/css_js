const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//function for clicking video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//function for updating play/pause icons
function updateIcon(){
    if(video.paused){
        play.innerHTML=`<button class="btn" id="play">▶️</button>`
    }else{

        play.innerHTML=`<button class="btn" id="play">⏸</button>`
    }
}
//function for update progress
function updateProgress(){
    progress.value = (video.currentTime/video.duration)*100;
    
    //set time
    let mins = Math.floor(video.currentTime/60);
    if(mins<10){
        mins= '0' + String(mins)
    }
    let sec= Math.floor(video.currentTime%60);
    if(sec<10){
        sec = '0' + String(sec)
    }
    timestamp.innerHTML = `${mins}:${sec}`
}
//function for stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}
//function for progress bar
function setVideoProgress(){
    video.currentTime = (+progress.value*video.duration)/100;

}


//event listner for video play
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon)
video.addEventListener('timeupdate', updateProgress)

//for play button
play.addEventListener('click', toggleVideoStatus);

//for stop button
stop.addEventListener('click', stopVideo);

//for progress bar
progress.addEventListener('change', setVideoProgress);