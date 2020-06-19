const timerCount = document.querySelector('#timer');
const start = document.querySelector('#start');
const stopCounter = document.querySelector('#stop');
const reseting = document.querySelector('#reset');

let stopFlag = false;

let seconds = 0;
let minutes = 0;

function startTimer() {
    stopFlag = false;  
    let timer = setInterval(function() {
        timerCount.innerHTML = `${minutes}m : ${seconds}s`;

        seconds += 1;

        if(seconds === 60) {
            seconds = 0;
            minutes += 1;
        }

        if(stopFlag) {
            clearInterval(timer);
        }
    }, 1000);
}

function stopTimer() {
    stopFlag = true;
}

function resetTimer() {
    seconds = 0;
    minutes = 0;

    timerCount.innerHTML = `${minutes}m : ${seconds}s`;
}

start.addEventListener('click', startTimer);
stopCounter.addEventListener('click', stopTimer);
reseting.addEventListener('click', resetTimer);