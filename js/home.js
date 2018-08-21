'use strict';

var list;

function loadList() {
  var attractionItems = JSON.parse(localStorage.getItem('attractionList')) || [];
  list = new AttractionsList(attractionItems);
}

for (var i = 0; i < Attraction.allAttractions.length; i++) {
  var carousel = document.querySelector('.siema');
  var imgDiv = document.createElement('div');
  imgDiv.class = 'img__wrapper';
  var carouselImg = document.createElement('img');
  carouselImg.src = Attraction.allAttractions[i].picturePath;

  imgDiv.appendChild(carouselImg);
  carousel.appendChild(imgDiv);
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
var addBtn = document.querySelector('#addBtn');
var goToBtn = document.querySelector('#goToBtn');

spinBtnElm.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  mySiema.next(Math.floor(Math.random() * someNum));
});

navLeftBtnElm.addEventListener('click', () => mySiema.prev());
navRightBtnElm.addEventListener('click', () => mySiema.next());

addBtn.addEventListener('click', function(){
  if (list.items.includes(Attraction.allAttractions[mySiema.currentSlide])) {
    console.log('item already on list');
  } else {
    list.addItem(Attraction.allAttractions[mySiema.currentSlide]);
  }
});

goToBtn.addEventListener('click', function(){
  localStorage.setItem('attractionList', JSON.stringify(list.items));
});

loadList();
