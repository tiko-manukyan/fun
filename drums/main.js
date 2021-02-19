document.addEventListener('keydown', (event) => {
    const  {keyCode} = event;
    const audio = document.querySelector(`[data-id='${keyCode}']`)
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        const  div = document.querySelector(`[data-key='${keyCode}']`)
        div.classList.add('playing')

        audio.play();
    }
})

document.addEventListener('keyup', (event) => {
    const  {keyCode} = event;
    const  div = document.querySelector(`[data-key='${keyCode}']`)
    if (div) {
        div.classList.remove('playing')
    }
})

