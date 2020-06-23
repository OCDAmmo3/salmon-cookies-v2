'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

var root = document.getElementById('root');

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
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.setCookiesSold();
    }
  }
  this.createUl = function() {

    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', this.locationId);
    var newH1 = document.createElement('h1');
    newH1.textContent = this.location;
    newDiv.appendChild(newH1);

    var newUl = document.createElement('ul');
    newUl.setAttribute('id', this.locationId);

    for (var i = 0; i < storeHours.length - 1; i++) {
      var li = document.createElement('li');
      li.textContent = 'At ' + storeHours[i] + ' we sold ' + this.cookiesSold[i] + '.';
      newUl.appendChild(li);
    }

    var totalHere = document.createElement('li');
    totalHere.textContent = 'Total cookies sold: ' + this.totalCookies();
    newUl.appendChild(totalHere);
    newDiv.appendChild(newUl);
    root.appendChild(newDiv);

  }
}

var Seattle = new Store('seattle', 'Seattle', 23, 65, 6.3);
Seattle.fillCookies();
Seattle.createUl();

var Tokyo = new Store('tokyo', 'Tokyo', 3, 24, 1.2);
Tokyo.fillCookies();
Tokyo.createUl();

var Dubai = new Store('dubai', 'Dubai', 11, 38, 3.7);
Dubai.fillCookies();
Dubai.createUl();

var Paris = new Store('paris', 'Paris', 20, 38, 2.3);
Paris.fillCookies();
Paris.createUl();

var Lima = new Store('lima', 'Lima', 2, 16, 4.6);
Lima.fillCookies();
Lima.createUl();