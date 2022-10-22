/* girls.js - Interaktywna Galeria
 * Plik gallery.js
 * Tutaj będziemy dodawać nasz kod.
 */

// document.querySelector("#pin1").classList.add("selected");

let currentNumber = 1;
let playing = false;
let interval;

function showSlide1() {
  showSlide(1);
}
function showSlide2() {
  showSlide(2);
}
function showSlide3() {
  showSlide(3);
}
function showSlide4() {
  showSlide(4);
}
function showSlide5() {
  showSlide(5);
}

function showSlide(number) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide" + number).classList.add("show");
  selectPin(number);
  currentNumber = number;
}

function showNextSlide() {
  let newNumber = currentNumber + 1;
  if (newNumber > 5) {
    newNumber = 1;
  }
  showSlide(newNumber);
}

function showPrevSlide() {
  let newNumber = currentNumber - 1;
  if (newNumber < 1) {
    newNumber = 5;
  }
  showSlide(newNumber);
}

function selectPin(newNumber) {
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector("#pin" + newNumber).classList.add("selected");
}

function playButtonClicked() {
  if (playing === false) {
    startSlideshow();
  } else {
    stopSlideshow();
  }
}

function startSlideshow() {
  document.querySelector("#play").classList.add("on");
  playing = true;
  interval = setInterval(showNextSlide, 2000);
}

function stopSlideshow() {
  document.querySelector("#play").classList.remove("on");
  playing = false;
  clearInterval(interval);
}

for (let nrPinu = 1; nrPinu <= 5; nrPinu++) {
  document
    .querySelector("#pin" + nrPinu)
    .addEventListener("click", function () {
      showSlide(nrPinu);
    });
}

// document.querySelector("#pin1").addEventListener("click", showSlide1);
// document.querySelector("#pin2").addEventListener("click", showSlide2);
// document.querySelector("#pin3").addEventListener("click", showSlide3);
// document.querySelector("#pin4").addEventListener("click", showSlide4);
// document.querySelector("#pin5").addEventListener("click", showSlide5);

document.querySelector("#prev").addEventListener("click", showPrevSlide);
document.querySelector("#next").addEventListener("click", showNextSlide);

document.querySelector("#play").addEventListener("click", playButtonClicked);
