'use strict';

var car1Horn = new Audio('sound/car1.wav');
var car2Horn = new Audio('sound/car2.wav');
var win = new Audio('sound/win.mp3');

const car1 = {
  color: 'Blue',
  margin: Math.floor(Math.random() * 10) + 1,
  speed: Math.floor(Math.random() * 15) + 5,
};

const car2 = {
  color: 'Yellow',
  margin: Math.floor(Math.random() * 10) + 1,
  speed: Math.floor(Math.random() * 15) + 5,
};

var interval;
var interval2;
interval = setInterval(moveBlueCar, 300);
interval2 = setInterval(moveYellowCar, 300);
const car1Div = document.querySelector('.car1');
const car2Div = document.querySelector('.car2');
const elH1 = document.querySelector('.h1');
function moveBlueCar() {
  car1Div.addEventListener('click', function () {
    car1Horn.play();
    car1Horn.currentTime = 0;
  });
  car1Div.style.marginRight = car1.margin + car1.speed + 'px';
  car1.margin = car1.margin + car1.speed;
  if (car1.margin >= 1400 || car2.margin >= 1400) {
    clearInterval(interval);
    elH1.innerHTML = car2.color + ' car WINS 🏆';
    document.querySelector('.flag').classList.remove('d-none');
    win.play();
  }

  if (car1.margin >= 1200) {
    elH1.classList.remove('d-none');
    elH1.innerHTML = car1.color + ' car is about to win';
    elH1.classList.add('text-primary');
  }
}
function moveYellowCar() {
  car2Div.addEventListener('click', function () {
    car2Horn.play();
    car2Horn.currentTime = 0;
  });

  car2Div.style.marginRight = car2.margin + car2.speed + 'px';
  car2.margin = car2.margin + car2.speed;
  if (car1.margin >= 1400 || car2.margin >= 1400) {
    clearInterval(interval2);
    elH1.innerHTML = car1.color + ' car WINS 🏆';
    document.querySelector('.flag').classList.remove('d-none');
    win.play();
  }
  if (car2.margin >= 1200) {
    elH1.classList.remove('d-none');
    elH1.innerHTML = car2.color + ' car is about to win';
    elH1.classList.add('text-warning');
  }
}
