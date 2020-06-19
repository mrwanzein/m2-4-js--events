const div = document.querySelector('#main');
const startButton = document.querySelector('#startButton');
const counter = document.querySelector('#counter');
const loseOrWin = document.querySelector('#loseOrWin');
const loseOrWinMsg = document.querySelector('#loseOrWinMsg');

let counterNum = 5;
let winningCondition = 0;
let counterToWin = 0;

let randomAmountOfButton = Math.floor((Math.random() * 10) + 1);

function createButtons() {
    
    for(let i=1; i<=randomAmountOfButton; i++){
        let randomPosition1 = Math.floor(Math.random() * 300);
        let randomPosition2 = Math.floor(Math.random() * 100);
        
        const button = document.createElement('button');
        button.setAttribute('onclick', 'changeColor(this)');
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        button.style.fontSize = '2em';
        button.style.borderRadius = '50%';
        button.style.padding = '15px';
        button.style.position = 'relative';
        button.style.top = `${randomPosition1}px`;
        button.style.left = `${randomPosition2}px`;
        button.innerHTML = `${i}`;
        div.appendChild(button);
        
        winningCondition = i;
    }
}

function changeColor(el) {
    el.style.backgroundColor = 'green';
    counterToWin += 1;
}

function startGame() {
    startButton.removeEventListener('click', startGame);
    startButton.style.display = 'none';
    createButtons();
    counter.innerHTML = `${counterNum}`;
    
    let set = setInterval(function() {
        if(counterToWin === winningCondition) {
            clearInterval(set);
            counter.style.display = 'none';

            loseOrWin.style.color = 'white';
            loseOrWin.style.textAlign = 'center';
            loseOrWin.style.backgroundColor = 'green';
            loseOrWinMsg.innerHTML = 'You win :D';
            loseOrWinMsg.style.fontSize = '3em';
            loseOrWinMsg.style.paddingTop = '20px';
            loseOrWin.style.display = 'unset';
        };

        counterNum -= 1;
        counter.innerHTML = `${counterNum}`;
    

        if(counterNum === 0) {
            counter.innerHTML = `0`;
            clearInterval(set);

            loseOrWin.style.color = 'white';
            loseOrWin.style.textAlign = 'center';
            loseOrWin.style.backgroundColor = 'red';
            loseOrWinMsg.innerHTML = 'You lose D:';
            loseOrWinMsg.style.fontSize = '3em';
            loseOrWinMsg.style.paddingTop = '20px';
            loseOrWin.style.display = 'unset';
            }
        }, 1000);
}

startButton.addEventListener('click', startGame);