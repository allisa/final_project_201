'use strict';

var list;

function loadList() {
  var attractionItems =
    JSON.parse(localStorage.getItem('attractionList')) || [];
  list = new AttractionsList(attractionItems);
  myNotesBtn.innerHTML = `my notes (${list.items.length})`;
}

for (var i = 0; i < Attraction.allAttractions.length; i++) {
  var carousel = document.querySelector('.siema');
  var figDiv = document.createElement('figure');
  figDiv.className = 'img__wrapper';
  var carouselImg = document.createElement('img');
  carouselImg.src = Attraction.allAttractions[i].picturePath;
  figDiv.appendChild(carouselImg);

  var imgCaption = document.createElement('caption');
  imgCaption.innerText = Attraction.allAttractions[i].name;
  imgCaption.className = 'img__caption';
  figDiv.appendChild(imgCaption);

  carousel.appendChild(figDiv);
}

var someNum = Attraction.allAttractions.length;
var mySiema = new Siema({
  loop: true,
  duration: 600
});

mySiema.goTo(Math.floor(someNum * Math.random()));
// random button hidden until there is many more locations
var spinBtnElm = document.querySelector('#btnRandom');
var navLeftBtnElm = document.querySelector('.--left');
var navRightBtnElm = document.querySelector('.--right');
var addBtn = document.querySelector('#addBtn');
var goToBtn = document.querySelector('#goToBtn');
var myNotesBtn = document.querySelector('.notes-button');

spinBtnElm.addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  do {
    var ranNum = Math.floor(Math.random() * someNum);
    console.log(`currSlide: ${mySiema.currentSlide}, ranNum: ${ranNum}`);
  } while (mySiema.currentSlide === ranNum);
  mySiema.goTo(ranNum);
});

navLeftBtnElm.addEventListener('click', () => mySiema.prev());
navRightBtnElm.addEventListener('click', () => mySiema.next());

addBtn.addEventListener('click', function() {
  for (var i = 0; i < list.items.length; i++) {
    if (
      list.items[i].name ===
      Attraction.allAttractions[mySiema.currentSlide].name
    ) {
      console.log('item already on list');
      return;
    }
  }
  list.addItem(Attraction.allAttractions[mySiema.currentSlide]);
  myNotesBtn.innerHTML = `my notes (${list.items.length})`;
});

goToBtn.addEventListener('click', function() {
  localStorage.setItem('attractionList', JSON.stringify(list.items));
  window.location.href = 'info.html';
});

loadList();
