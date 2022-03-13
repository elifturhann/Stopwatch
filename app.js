let seconds = 00;
let milliseconds = 00;
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let getMilliseconds = document.querySelector('.milliseconds');
let getMins = document.querySelector('.mins');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let stop = document.querySelector('.stop');
let interval;

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    start.style.display = "none";
    pause.style.display = "block";
})
pause.addEventListener('click', () => {
    pause.style.display = "none";
    start.style.display = "block";
    clearInterval(interval);
})
stop.addEventListener('click', () => {
    clearInterval(interval);
    milliseconds = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getMilliseconds.innerHTML = milliseconds;
    getMins.innerHTML = mins;
    pause.style.display = "none";
    start.style.display = "block";
})

function startTimer(){
    milliseconds++;
    if(milliseconds <= 9){
        getMilliseconds.innerHTML = '0' + milliseconds;
    }
    if(milliseconds > 9){
        getMilliseconds.innerHTML = milliseconds;
    }
    if(milliseconds > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        milliseconds = 0;
        getMilliseconds.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}
