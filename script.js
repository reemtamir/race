'use strict';
// const car1Horn =  new Audio('');
var car1Horn = new Audio('sound/car1.wav');
var car2Horn = new Audio('sound/car2.wav');
var win = new Audio('sound/win.mp3');

const car1 = {
  margin: Math.floor(Math.random() * 10) + 1,
  speed: Math.floor(Math.random() * 15) + 5,
};

const car2 = {
  margin: Math.floor(Math.random() * 10) + 1,
  speed: Math.floor(Math.random() * 15) + 5,
};
console.log(car1);
console.log(car2);
var interval;
var interval2;
interval = setInterval(moveFirstCar, 300);
interval2 = setInterval(moveSecondCar, 300);
const car1Div = document.querySelector('.car1');
const car2Div = document.querySelector('.car2');

function moveFirstCar() {
  car1Div.addEventListener('click', function () {
    car1Horn.play();
    car1Horn.currentTime = 0;
  });
  car1Div.style.marginRight = car1.margin + car1.speed + 'px';
  car1.margin = car1.margin + car1.speed;
  if (car1.margin >= 1400 || car2.margin >= 1400) {
    clearInterval(interval);
    document.querySelector('.flag').classList.remove('d-none');
    win.play();
    document.querySelector('.h1').innerHTML = 'WIN 🏆';
  }

  if (car1.margin >= 1200)
    document.querySelector('.h1').classList.remove('d-none');
}
function moveSecondCar() {
  car2Div.addEventListener('click', function () {
    car2Horn.play();
    car2Horn.currentTime = 0;
  });

  car2Div.style.marginRight = car2.margin + car2.speed + 'px';
  car2.margin = car2.margin + car2.speed;
  if (car2.margin >= 1400 || car1.margin >= 1400) {
    clearInterval(interval2);
    document.querySelector('.flag').classList.remove('d-none');
    win.play();
    document.querySelector('.h1').innerHTML = 'WIN 🏆';
  }
  if (car2.margin >= 1200)
    document.querySelector('.h1').classList.remove('d-none');
}
