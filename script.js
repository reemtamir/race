'use strict';
// const car1Horn =  new Audio('');
var car1Horn = new Audio('sound/car1.wav');
var car2Horn = new Audio('sound/car2.wav');

const car1 = {
  margin: 10,
  speed: 10,
};
const car2 = {
  margin: 10,
  speed: 15,
};
var interval;
var interval2;
interval = setInterval(moveRedCar, 300);
interval2 = setInterval(moveBlueCar, 300);
const car1Div = document.querySelector('.car1');
const car2Div = document.querySelector('.car2');

function moveRedCar() {
  car1Div.addEventListener('click', function () {
    car1Horn.play();
    car1Horn.currentTime = 0;
  });
  car1Div.style.marginRight = car1.margin + car1.speed + 'px';
  car1.margin = car1.margin + car1.speed;
  if (car1.margin >= 1600) {
    clearInterval(interval);
  }
}
function moveBlueCar() {
  car2Div.addEventListener('click', function () {
    car2Horn.play();
    car2Horn.currentTime = 0;
  });

  car2Div.style.marginRight = car2.margin + car2.speed + 'px';
  car2.margin = car2.margin + car2.speed;
  if (car2.margin >= 1600) {
    clearInterval(interval2);
  }
}