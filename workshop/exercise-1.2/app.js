// Exercise 1.2
// ------------
const timeIndicator = document.querySelector('#time');
const result = document.querySelector('#result');
const body = document.querySelector('body');

timeIndicator.style.font.size = '2em';
timeIndicator.style.color = 'yellow';

let randomCounterNum = Math.floor(Math.random() * 5);

timeIndicator.innerHTML = `${randomCounterNum}`;

let timer = setTimeout(lose, (randomCounterNum * 1000));

body.addEventListener('click', win);

function win() {
    result.innerHTML = 'You win :D';
    clearTimeout(timer);
    body.removeEventListener(win);
}

function lose() {
    result.innerHTML = 'You lose :(';
    body.removeEventListener('click', win);
}
