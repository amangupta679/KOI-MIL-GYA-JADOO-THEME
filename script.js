const audioFiles = {
    'B': 'B.mp3',
    'C': 'C.mp3',
    'D': 'D.mp3',
    'E': 'E.mp3',
    'F': 'F.mp3',
};

let arr =[];

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    const statusElement = document.getElementById('status');
    arr.push(key);
    if (audioFiles.hasOwnProperty(key)) {
        statusElement.textContent = `Sending signal '${key}'...`;

        var audio = new Audio(audioFiles[key]);
        audio.play();
        setTimeout(function() {
            statusElement.textContent = `Receiving signal '${key}'...`;
            audio.play();
        }, 8000);

        setTimeout(function() {
            statusElement.textContent = `recieving signal`;
        }, 8000);
    }
    console.log(arr.reverse());
});

