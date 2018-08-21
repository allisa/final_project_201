'use strict';

// Attraction list constructor.
var AttractionsList = function(items) {
  this.items = items;
};

AttractionsList.prototype.addItem = function(attraction) {
  // Done: create a new AttractionItem and add it to this.items
  this.items.push(attraction);
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
  address,
  website,
  geoposition,
  descShort,
  pictureAdditional,
  pictureCredits,
  notes
) {
  this.name = name;
  this.picturePath = picturePath;
  this.descShort = descShort;
  this.address = address;
  this.website = website;
  this.pictureAdditional = pictureAdditional;
  this.pictureCredits = pictureCredits;
  (this.notes = notes),
  (this.geoposition = geoposition),
  Attraction.allAttractions.push(this);
};
Attraction.allAttractions = [];

function generateAttractions() {
  for (var i = 0; i < locations.length; i++) {
    new Attraction(locations[i].name, locations[i].imgpath, locations[i].address, locations[i].website, locations[i].geo, locations[i].shortDesc);
  }
}

// Initialize the app by creating the big list of attractions with images and names
generateAttractions();
