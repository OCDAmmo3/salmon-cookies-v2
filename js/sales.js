'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
var HongKong = new Store('hong-kong', 'Hong Kong', 14, 72, 8.2);

var stores = [Seattle, Tokyo, Dubai, Paris, Lima, HongKong];

stores.forEach(store => {
  store.fillCookies();
});

function createTable() {

  // Creating table
  var newTable = document.createElement('table');
  root.appendChild(newTable);
  
  // Creating table header and adding word "Locations" as a staple above the various locations
  var tableHeader = document.createElement('thead');
  newTable.appendChild(tableHeader);
  var heading = document.createElement('th');
  heading.textContent = 'Locations';
  tableHeader.appendChild(heading);

  // Creating table body
  var tableBody = document.createElement('tbody');
  newTable.appendChild(tableBody);

  // Creating table footer for totals
  var tableFooter = document.createElement('tfoot');
  tableFooter.textContent = 'Hourly Totals';
  newTable.appendChild(tableFooter);

  // Adding in every hour from store hours array as a table heading
  for(var i = 0; i < storeHours.length; i++) {
    var th = document.createElement('th');
    th.textContent = storeHours[i];
    tableHeader.appendChild(th);
  }

  // Adding total heading for end of each day
  var totalHeading = document.createElement('th');
  totalHeading.textContent = 'Total';
  tableHeader.appendChild(totalHeading);

  // Adding sales numbers for each store
  for(var i = 0; i < stores.length; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute('id', stores[i].locationId);
    tr.textContent = stores[i].location;
    tableBody.appendChild(tr);
    // Adding sales for each hour at each store
    for(var j = 0; j < storeHours.length; j++) {
      var td = document.createElement('td');
      td.textContent = stores[i].cookiesSold[j];
      tr.appendChild(td);
    }
    // Adding total daily sales for each store
    var dailyTotal = document.createElement('td');
    dailyTotal.textContent = stores[i].totalCookies();
    tr.appendChild(dailyTotal);
  }

  // Adding in totals for each hour in footer
  for(var i = 0; i < storeHours.length; i++) {
    var total = 0;
    var totalFoot = document.createElement('td');
    console.log('first');
    for(var j = 0; j < stores.length; j++) {
      total = total + stores[j].cookiesSold[i];
      console.log('second');
    }
    totalFoot.textContent = total;
    tableFooter.appendChild(totalFoot);
  }

  // Adding in final total for each store and every hour
  var totalTotal = document.createElement('td');
  var finalTotal = 0;
  for(var i = 0; i < stores.length; i++) {
    finalTotal = finalTotal + stores[i].totalCookies();
  }
  totalTotal.textContent = finalTotal;
  tableFooter.appendChild(totalTotal);
}

createTable();
