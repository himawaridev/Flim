
// show slide 1 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slider');
    let radio = document.getElementsByClassName('radio');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < radio.length; i++) {
        radio[i].className = radio[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    radio[slideIndex - 1].className += " active";
}

//wrapper 

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




// film 1
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

