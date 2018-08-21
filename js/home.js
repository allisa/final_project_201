'use strict';

for (var i = 0; i < Attraction.allAttractions.length; i++) {
  var carousel = document.querySelector('.siema');
  var carouselImg = document.createElement('img');
  carouselImg.src = Attraction.allAttractions[i].picturePath;

  carousel.appendChild(carouselImg);
}

var someNum = 3;
var mySiema = new Siema({
  loop: true,
  duration: 600,
});

mySiema.goTo(Math.floor(someNum * Math.random())) 
var spinBtnElm = document.querySelector('#btnRandom');
var navLeftBtnElm = document.querySelector('#btnLeft');
var navRightBtnElm = document.querySelector('#btnRight');

spinBtnElm.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  mySiema.next(Math.floor(Math.random() * someNum));
});

navLeftBtnElm.addEventListener('click', () => mySiema.prev());
navRightBtnElm.addEventListener('click', () => mySiema.next());