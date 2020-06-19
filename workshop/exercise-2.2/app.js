const div = document.querySelector('#main');

for(let i=0; i<21; i++){
    const button = document.createElement('button');
    button.setAttribute('onclick', 'changeColor(this)');
    button.style.backgroundColor = 'red';
    button.style.margin = '10px';
    button.style.color = 'white';
    button.style.fontSize = '2em';
    button.innerHTML = `${i}`;
    div.appendChild(button);
}

function changeColor(el) {
    if(el.style.backgroundColor === 'red') {
        el.style.backgroundColor = 'green';
    } else

    el.style.backgroundColor = 'red';
}