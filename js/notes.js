'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromList method is invoked.
var listElm = document.getElementById('attractionList');
listElm.addEventListener('click', removeItemFromList);
var attractionsList;

function loadList() {
  var attractionItems =
    JSON.parse(localStorage.getItem('attractionList')) || [];
  attractionsList = new AttractionsList(attractionItems);
}

function renderList() {
  loadList();
  clearList();
  showList();
}

// DONE: Remove all of the rows in the list
function clearList() {
  while (listElm.firstChild) {
    listElm.removeChild(listElm.firstChild);
  }
}

function showList() {
  if (attractionsList.items.length === 0) {
    var noNotes = document.createElement('p');
    noNotes.id = 'no-notes';
    noNotes.innerText = 'You don\'t have any attractions to take notes on. Go back and pick some!';
    listElm.appendChild(noNotes);
  }

  attractionsList.items.forEach((attraction, ndx) => {
    var mediaDescription = document.createElement('div');
    mediaDescription.className = 'media__description';

    var mediaContainer = document.createElement('div');
    mediaContainer.className = 'media__container';

    var mediaNameElm = document.createElement('h2');
    mediaNameElm.innerText = attraction.name;
    mediaNameElm.className = 'media__title';

    var mediaAddressElm = document.createElement('address');
    mediaAddressElm.innerText = `Address: ${attraction.address}`;
    mediaAddressElm.className = 'media__address';

    var mediaWebsiteElm = document.createElement('a');
    mediaWebsiteElm.href = attraction.website;
    mediaWebsiteElm.target = '_blank';
    mediaWebsiteElm.innerText = attraction.website;
    mediaWebsiteElm.className = 'media__link';

    var mediaTextElm = document.createElement('p');
    mediaTextElm.innerText = attraction.descShort;
    mediaTextElm.className = 'media__text';

    var textAreaElm = document.createElement('textarea');
    textAreaElm.className = 'media__editable';
    textAreaElm.id = `ta-${ndx}`;
    textAreaElm.value = attraction.notes || '';
    textAreaElm.placeholder= 'Take your notes here.';
    textAreaElm.rows = '9';

    var btnDeleteElm = document.createElement('button');
    btnDeleteElm.className = 'btn  btn--delete';
    btnDeleteElm.textContent = 'X';
    btnDeleteElm.dataset.action = 'delete';
    btnDeleteElm.dataset.index = ndx;

    var row = document.createElement('section');
    row.style = `background-image: url(${attraction.picturePath});
    background-repeat: no repeat;
    background-position: center center;
    background-size: cover`;
    row.className = 'media-object';
    row.dataset.index = ndx;
    mediaDescription.appendChild(mediaNameElm);
    mediaDescription.appendChild(mediaAddressElm);
    mediaDescription.appendChild(mediaWebsiteElm);
    mediaDescription.appendChild(mediaTextElm);
    mediaContainer.appendChild(mediaDescription);
    row.appendChild(mediaContainer);
    mediaContainer.appendChild(textAreaElm);
    row.appendChild(btnDeleteElm);
    listElm.appendChild(row);

    textAreaElm.addEventListener('keyup', function(e) {
      attractionsList.items[e.target.parentNode.parentNode.dataset.index].notes = textAreaElm.value;
      attractionsList.saveToLocalStorage();
    });
  });
}

function removeItemFromList(event) {
  if (
    event.target.tagName === 'BUTTON' &&
    event.target.dataset.action === 'delete'
  ) {
    // TODO: When a delete button is clicked, use attractionsList.removeItem to remove the correct item
    attractionsList.removeItem(event.target.dataset.index);
    // TODO: Save the attractionsList back to local storage
    attractionsList.saveToLocalStorage();
    // TODO: Re-draw the attractions list
    clearList();
    showList();
  }
}

// This will initialize the page and draw the attraction list on screen\
renderList();
