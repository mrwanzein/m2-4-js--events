const div = document.querySelector('#main');

for(let i=0; i<21; i++){
    const button = document.createElement('button');
    button.setAttribute('class', 'btn');
    button.setAttribute('onclick', 'changeColor(this)');
    button.innerHTML = `${i}`;
    div.appendChild(button);
}

function changeColor(el) {
    el.style.background = 'green';
}


