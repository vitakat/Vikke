var buttonMooi = document.getElementById('button_mooi');
var buttonMatig = document.getElementById('button_matig');
var buttonSlecht = document.getElementById('button_slecht');
var video = document.getElementById('video');


buttonMooi.addEventListener('click', speelMooi);
buttonMatig.addEventListener('click', speelMatig);
buttonSlecht.addEventListener('click', speelSlecht);

function speelMooi() {
    video.src = "img/poof.mp4";
    console.log('run mooi');
}

function speelMatig() {
    video.src = "img/dansen.mp4";
    console.log('run matig');
}

function speelSlecht() {
    video.src = "img/zzz.mp4";
    console.log('sup slecht');
}