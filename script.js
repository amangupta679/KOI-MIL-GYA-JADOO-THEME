// script.js
const audioFiles = {
    'B': 'B.mp3',
    'C': 'C.mp3',
    'D': 'D.mp3',
    'E': 'E.mp3',
    'F': 'F.mp3',
};

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();

    if (audioFiles.hasOwnProperty(key)) {
        var audio = new Audio(audioFiles[key]);
        audio.play();
    }
});
