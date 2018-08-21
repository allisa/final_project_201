'use strict';

// Attraction list constructor.
var AttractionsList = function(items) {
  this.items = items;
};

AttractionsList.prototype.addItem = function(attraction) {
  // Done: create a new AttractionItem and add it to this.items
  this.items = new AttractionItem(attraction);
};

AttractionsList.prototype.saveToLocalStorage = function() {
  // DONE: save the contents of the attractionList to localStorage
  localStorage.setItem(attractionList, JSON.stringify(this.items));
};

AttractionsList.prototype.removeItem = function(item) {
  // TODO: remove one item from the attractionList.
};

// Product contructor.
var Attraction = function(
  name,
  picturePath,
  // descShort,
  // descLong,
  // pictureAdditional,
  // pictureCredits,
  // notes,
  // geoposition
) {
  this.name = name;
  this.picturePath = picturePath;
  // this.descShort = descShort;
  // this.descLong = descLong;
  // this.pictureAdditional = pictureAdditional;
  // this.pictureCredits = pictureCredits;
  // (this.notes = notes),
  // (this.geoposition = geoposition),
  Attraction.allAttractions.push(this);
};
Attraction.allAttractions = [];

function generateAttractions() {
  new Attraction('Fremont Troll', 'img/troll.jpg');
  new Attraction('Museum of Flight', 'img/flight.jpg');
  new Attraction('Pike Place Market', 'img/pike-place-market.jpg');
}

// Initialize the app by creating the big list of attractions with images and names
generateAttractions();
