'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(minHourCus, maxHourCus) {
  return Math.floor(Math.random() * (maxHourCus - minHourCus + 1)) + minHourCus;
}

function Store(locationId, location, minCust, maxCust, avgCook) {
  this.locationId = locationId;
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.custPerHour = 0;
  this.setCusPerHour = function() {
    this.custPerHour = randomNumber(this.minCust, this.maxCust);
  };
  this.cookiesSold = [];
  this.setCookiesSold = function() {
    this.setCusPerHour();
    this.cookiesSold.push(Math.floor(this.custPerHour * this.avgCook));
  };
  this.totalCookies = function() {
    var cookies = 0;
    for(var i = 0; i < this.cookiesSold.length; i++) {
      cookies = cookies + this.cookiesSold[i];
    }
    return cookies;
  };
  this.fillCookies = function() {
    for(var i = 0; i < storeHours.length; i++) {
      this.setCookiesSold();
    }
  };
}

var Seattle = new Store('seattle', 'Seattle', 23, 65, 6.3);
var Tokyo = new Store('tokyo', 'Tokyo', 3, 24, 1.2);
var Dubai = new Store('dubai', 'Dubai', 11, 38, 3.7);
var Paris = new Store('paris', 'Paris', 20, 38, 2.3);
var Lima = new Store('lima', 'Lima', 2, 16, 4.6);

var stores = [Seattle, Tokyo, Dubai, Paris, Lima];

stores.forEach(store => {
  store.fillCookies();
});

var seattleDiv = document.getElementById('seattle-div');
var tokyoDiv = document.getElementById('tokyo-div');
var dubaiDiv = document.getElementById('dubai-div');
var parisDiv = document.getElementById('paris-div');
var limaDiv = document.getElementById('lima-div');

var locDivs = [seattleDiv, tokyoDiv, dubaiDiv, parisDiv, limaDiv];

for(var i = 0; i < locDivs.length; i++) {
  if(locDivs[i]) {
    for(var j = 0; j < storeHours.length; j++) {
      var li = document.createElement('li');
      li.textContent = `We sold ${stores[i].cookiesSold[j]} at ${storeHours[j]}`;
      locDivs[i].appendChild(li);
    }
  }
}