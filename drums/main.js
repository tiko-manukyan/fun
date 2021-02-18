document.addEventListener('keydown', (event) => {
    const { keyCode } = event;
    const audio = findAudio(keyCode);

    if (audio) {
        resetAudio(audio);
        const div = document.querySelector(`[data-key='${keyCode}']`);
        div.classList.add('playing');
        audio.play();
    }
});

document.addEventListener('keyup', (event) => {
    const { keyCode } = event;
    const div = document.querySelector(`[data-key='${keyCode}']`);
    if (div) {
        div.classList.remove('playing');a
    }
})


function findAudio(keyCode) {
    let audio;
    const audios = document.querySelectorAll('audio');
    audios.forEach((el) => {
        const dataKey = el.getAttribute('data-key');
        if (keyCode === +dataKey) {
           audio =  el;
        }
    });
    return audio;
}


function resetAudio(aud) {
    aud.pause();
    aud.currentTime = 0;
}
