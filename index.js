'use strict'

const sounds = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hihat.wav',
    'F' : 'kick.wav',
    'Z' : 'openhat.wav',
    'X' : 'ride.wav',
    'C' : 'snare.wav',
    'V' : 'tink.wav',
    'G' : 'tom.wav',
}

const createDiv = (text) => {
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = text
    div.id = text
    document.getElementById('container').appendChild(div)
}

const displaySound = (sounds) => {
    Object.keys(sounds).forEach(createDiv)
}

const playSound = (letter) => {
    const audio = new Audio(`./sounds/${sounds[letter]}`)
    audio.play()
}

const addEffect = (letter) => document.getElementById(letter)
                                      .classList.add('active')

/*const removeEffect = (letter) => {
    const div = document.getElementById(letter)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive)
}*/

const activateDiv = (event) => {
    let letter = ''
    if (event.type == 'click') {
        letter = event.target.id
    }else{
        letter = event.key.ToUpperCase()
    } 
    
    let letterPermission = sounds.hasOwnProperty(letter)
    if (letterPermission){
        addEffect(letter)
        playSound(letter)
        //removeEffect(letter)
    } 
}

displaySound (sounds)

document.getElementById('container')
        .addEventListener('click', activateDiv);

window.addEventListener('keydown', activateDiv())

