'use strict';

var list;
var btnAddNoteText = 'Visit Later';

function loadList() {
  var attractionItems =
    JSON.parse(localStorage.getItem('attractionList')) || [];
  list = new AttractionsList(attractionItems);
  addBtn.textContent = `${btnAddNoteText} (${list.items.length})`;
  // addBtn.textContent = `Add To List (${list.items.length})`;
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

var someNum = Attraction.allAttractions.length;
var mySiema = new Siema({
  loop: true,
  duration: 600
});

mySiema.goTo(Math.floor(someNum * Math.random()));
var spinBtnElm = document.querySelector('#btnRandom');
var navLeftBtnElm = document.querySelector('#arrow-left');
var navRightBtnElm = document.querySelector('#arrow-right');
var addBtn = document.querySelector('#addBtn');
var goToBtn = document.querySelector('#goToBtn');

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
  addBtn.textContent = `${btnAddNoteText} (${list.items.length})`;
});

goToBtn.addEventListener('click', function() {
  localStorage.setItem('attractionList', JSON.stringify(list.items));
  window.location.href = 'info.html';
});

loadList();
