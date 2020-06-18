// Exercise 1.0
// ------------
const body = document.querySelector('body');
const div = document.querySelector('#main');

body.addEventListener('click', onBodyClick);

function onBodyClick() {
    div.innerHTML = 'You win!';
    body.removeEventListener('click', onBodyClick);
}
