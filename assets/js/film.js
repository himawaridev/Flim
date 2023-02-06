function handleClick(number) {
    console.log(number)
    if (number === 0) {
        location.href = '1 home.html';
    }
    if (number === 1) {
        location.href = '1 home.html';
    }
    if (number === 2) {
        location.href = '2 movies.html';
    }

    if (number === 3) {
        location.href = '3 tvshow.html';
    }

    if (number === 4) {
        location.href = '4 explore.html';
    }

    if (number === 5) {
        location.href = '5 contactus.html';
    }
    if (number === 6) {
        location.href = 'login.html';
    }
}

var myVideo = document.getElementById("watch-movies"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 1100; 
} 

function makeSmall() { 
    myVideo.width = 700; 
} 

function makeNormal() { 
    myVideo.width = 1000; 
} 



















const NUMBER_ITEM_SHOW = 5
const arrShow = [0, 1, 2, 3, 4]

showFilm(0);

function filmSlides(n) {
    showFilm(n);
}
function showFilm(numberSlidesNext) {
    let film = document.getElementsByClassName('image-poster-film-length')
    for (let i = 0; i < arrShow.length; i++) {
        if (arrShow[0] + numberSlidesNext >= 0 && arrShow[4] + numberSlidesNext < film.length) {
            arrShow[i] += numberSlidesNext
        }

    }

    console.log(arrShow)
    for (i = 0; i < film.length; i++) {
        film[i].style.display = 'none';
    }
    for (i = 0; i < arrShow.length; i++) {
        film[arrShow[i]].style.display = 'block';
    }
}

