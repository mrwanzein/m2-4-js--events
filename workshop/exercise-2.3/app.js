const div = document.querySelector('#main');

for(let i=0; i<21; i++){
    let randomPosition1 = Math.floor(Math.random() * 100);
    let randomPosition2 = Math.floor(Math.random() * 100);
    
    const button = document.createElement('button');
    button.setAttribute('onclick', 'changeColor(this)');
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
    button.style.fontSize = '2em';
    button.style.borderRadius = '50%';
    button.style.padding = '15px';
    button.style.position = 'absolute';
    button.style.top = `${randomPosition1}vh`;
    button.style.left = `${randomPosition2}vw`;
    button.innerHTML = `${i}`;
    div.appendChild(button);
}

function changeColor(el) {
    if(el.style.backgroundColor === 'green') {
        el.style.backgroundColor = 'red';
    } else

    el.style.backgroundColor = 'green';
}