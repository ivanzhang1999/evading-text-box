const x = 0;
const y = 0;
const button = document.getElementById('button');

// Get the position of the button
const buttonRect = button.getBoundingClientRect();

// Log the x and y coordinates
console.log('Button X:', buttonRect.x);
console.log('Button Y:', buttonRect.y);

button_yes.addEventListener('click', function() {
    window.open('https://colonist.io/#2bx2');
});

function move_button(top, left) {
    button.style.position = 'absolute'
    button.style.top = top;
    button.style.left = left;
}

document.addEventListener('mousemove', function(event){
    const x = event.clientX;
    const y = event.clientY;

});

button.addEventListener('mouseover', function(event){
    const new_button_y = getRandomInt(0, window.innerHeight);
    const new_button_x = getRandomInt(0, window.innerWidth);
    move_button(new_button_y,new_button_x);
    console.log('x and y' + new_button_x + ' ' + new_button_y);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
