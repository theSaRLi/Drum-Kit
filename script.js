window.addEventListener('keydown', function(event){
    /*console.log(event.keyCode); */
    const audio = document.querySelector(`audio[data-key ="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key ="${event.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start 
    audio.play(); 
    key.classList.add('playing');
});

function removeTransition(event){
    if(event.propertyName !== 'transform')
    return; //skip if it's not a transform
    this
}

const key = document.querySelectorAll('.key'); //select all keys in a NodeList 
key.forEach(key => key.addEventListener('transitionend', removeTransition)); 
