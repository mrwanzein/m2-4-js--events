// Exercise 1.1
// ------------
const body = document.querySelector('body')
const winLose = document.querySelector('.winLose');

body.addEventListener('click', win);

let timer = setTimeout(lose, 1000);

function win() {
    winLose.innerHTML = 'You win :D';
    clearTimeout(timer);
    body.removeEventListener(win);
}

function lose() {
    winLose.innerHTML = 'You lose :(';
    body.removeEventListener('click', win);
}




