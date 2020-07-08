const buttons = document.getElementsByClassName('button');

[...buttons].forEach( (button) => {
    button.addEventListener('click', (event) => {
        document.body.style.backgroundColor = event.target.id;
    });
});