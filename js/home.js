'use strict';

var list;

function loadList() {
  var attractionItems =
    JSON.parse(localStorage.getItem('attractionList')) || [];
  list = new AttractionsList(attractionItems);
  myNotesBtn.innerHTML = `my notes (${list.items.length})`;
}

function informUser() {
  // lots of zombie code! It's always best to remove code like this.
  // var navWrapperElm = document.querySelector('.nav__wrapper');
  var notifyElm = document.createElement('span');
  notifyElm.className = 'nav__notify';
  notifyElm.textContent = 'Added to my notes!';
  addBtn.appendChild(notifyElm);
  // notifyElm.classList.toggle('--hidden');
  // setTimeout(() => {
  //   notifyElm.classList.toggle('--hidden');
  // }, 2600);
  setTimeout(() => notifyElm.remove(), 3000);
}

// Built DOM for all our attraction objects
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

var attrNumber = Attraction.allAttractions.length;
var mySiema = new Siema({
  loop: true,
  duration: 600
});

// skip to random phoro on load
mySiema.goTo(Math.floor(attrNumber * Math.random()));
var spinBtnElm = document.querySelector('#btnRandom');
var navLeftBtnElm = document.querySelector('.--left');
var navRightBtnElm = document.querySelector('.--right');
var addBtn = document.querySelector('#addBtn');
var goToBtn = document.querySelector('#goToBtn');
var myNotesBtn = document.querySelector('.notes-button');

// For future development
// spinBtnElm.addEventListener('click', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   do {
//     var ranNum = Math.floor(Math.random() * someNum);
//     console.log(`currSlide: ${mySiema.currentSlide}, ranNum: ${ranNum}`);
//   } while (mySiema.currentSlide === ranNum);
//   mySiema.goTo(ranNum);
// });

navLeftBtnElm.addEventListener('click', () => mySiema.prev());
navRightBtnElm.addEventListener('click', () => mySiema.next());

addBtn.addEventListener('click', function() {
  for (var i = 0; i < list.items.length; i++) {
    if (
      list.items[i].name ===
      Attraction.allAttractions[mySiema.currentSlide].name
    )
      return;
  }
  informUser();
  list.addItem(Attraction.allAttractions[mySiema.currentSlide]);
  localStorage.setItem('attractionList', JSON.stringify(list.items));
  myNotesBtn.innerHTML = `my notes (${list.items.length})`;
  mySiema.next();
});

goToBtn.addEventListener('click', function() {
  window.location.href = 'info.html';
});

loadList();
