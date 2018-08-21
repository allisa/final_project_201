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
  attractionsList.items.forEach((attraction, ndx) => {
    var imgElm = document.createElement('img');
    imgElm.src = attraction.picturePath;
    imgElm.alt = `Picture of ${attraction.name}`;
    imgElm.className = 'media__image';

    var mediaImgElm = document.createElement('div');
    mediaImgElm.className = 'media__images';
    mediaImgElm.appendChild(imgElm);

    var mediaNameElm = document.createElement('h2');
    mediaNameElm.innerText = attraction.name;

    var mediaAddressElm = document.createElement('p');
    mediaAddressElm.innerText = attraction.address;

    var mediaWebsiteElm = document.createElement('a');
    mediaWebsiteElm.href = attraction.website;
    mediaWebsiteElm.target = '_blank';
    mediaWebsiteElm.innerText = attraction.website;

    var mediaTextElm = document.createElement('p');
    mediaTextElm.innerText = attraction.descShort;
    mediaTextElm.className = 'media__text';

    var textAreaElm = document.createElement('textarea');
    textAreaElm.className = 'media__editable';
    textAreaElm.id = `ta-${ndx}`;
    textAreaElm.value = attraction.notes || '';

    var btnSaveElm = document.createElement('button');
    btnSaveElm.className = 'btn  btn--save';
    btnSaveElm.textContent = 'Save';
    btnSaveElm.id = `btn-${ndx}`;

    var btnDeleteElm = document.createElement('button');
    btnDeleteElm.className = 'btn  btn--delete';
    btnDeleteElm.textContent = 'Delete';
    btnDeleteElm.dataset.action = 'delete';
    btnDeleteElm.dataset.index = ndx;

    var row = document.createElement('section');
    row.className = 'media-object';
    row.dataset.index = ndx;
    row.appendChild(mediaImgElm);
    row.appendChild(mediaNameElm);
    row.appendChild(mediaAddressElm);
    row.appendChild(mediaWebsiteElm);
    row.appendChild(mediaTextElm);
    row.appendChild(textAreaElm);
    row.appendChild(btnSaveElm);
    row.appendChild(btnDeleteElm);
    listElm.appendChild(row);

    btnSaveElm.addEventListener('click', function(e) {
      attractionsList.items[e.target.parentNode.dataset.index].notes =
        textAreaElm.value;
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

// This will initialize the page and draw the attraction list on screen
renderList();
