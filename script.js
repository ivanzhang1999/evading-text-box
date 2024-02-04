document.addEventListener("DOMContentLoaded", function() {
    const button_no = document.getElementById('button_no');
    const button_yes = document.getElementById('button_yes');

    //Adding functionality to swap position of buttons if they click no
    button_no.addEventListener('click', function() {
        // Get the position of the button
        const button_no_rect = button_no.getBoundingClientRect();
        const button_yes_rect = button_yes.getBoundingClientRect();
        
        const initial_yes_top = button_yes_rect.top + 'px';
        const initial_yes_left = button_yes_rect.left + 'px';

        button_yes.style.position = 'absolute';
        button_yes.style.top = button_no_rect.top + 'px';
        button_yes.style.left = button_no_rect.left + 'px';

        button_no.style.position = 'absolute';
        button_no.style.top = initial_yes_top;
        button_no.style.left = initial_yes_left;
        

    });
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
