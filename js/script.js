let btn1 = document.querySelector('#btn1');
let msg1 = document.querySelector('#message1');

btn1.addEventListener('contextmenu', event => {
    event.preventDefault();
});

btn1.addEventListener('mouseup', event => {
    switch(event.button){
        case 0:
            msg1.textContent = "Left mouse button clicked.";
            break;
        case 1:
            msg1.textContent = "Middle scroll wheel clicked.";
            break;
        case 2:
            msg1.textContent = "Right mouse button clicked.";
            break;
        default:
            msg1.textContent = `Unknown mouse button code: ${event.button}`;
    }
});

let btn2 = document.querySelector('#btn2');
let msg2 = document.querySelector('#message2');

btn2.addEventListener('click', event => {
    let keys = [];

    if(event.shiftKey){
        keys.push('shift');
    }
    if(event.ctrlKey){
        keys.push('ctrl');
    }
    if(event.altKey){
        keys.push('alt');
    }
    if(event.metaKey){
        keys.push('meta');
    }

    msg2.textContent = `Keys: ${keys.join('+')}`;
});

let track = document.querySelector('#track');
let msg3 = document.querySelector('#message3');

track.addEventListener('mousemove', event => {
    msg3.innerText = `
Screen X/Y: (${event.screenX}, ${event.screenY})
Client X/Y: (${event.clientX}, ${event.clientY})`
});