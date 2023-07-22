// links smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
//change images in cropdetails
function changeImage(inputimage) {
    document.getElementById('imagebox').src = inputimage;
}

// play sound in cropdetails
let listElements = document.querySelectorAll('.vegitem');
let sound = document.querySelector('.listsound');
let isAudioLoaded = false;

for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener('mouseenter', () => {
        if (isAudioLoaded) {
            sound.currentTime = 0;
            sound.play();
        }
    });
}

document.addEventListener('click', () => {
    if (!isAudioLoaded) {
        sound.load();
        isAudioLoaded = true;
    }
});
