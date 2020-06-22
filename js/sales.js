'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

function randomNumber(minHourCus, maxHourCus) {
  return Math.floor(Math.random() * (maxHourCus - minHourCus + 1)) + minHourCus;
}

var Seattle = {
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  custPerHour: 0,
  setCusPerHour: function() {
    this.custPerHour = randomNumber(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function() {
    this.setCusPerHour();
    this.cookiesSold.push(Math.floor(this.custPerHour * this.avgCook));
  },
  totalCookies: function() {
    var cookies = 0;
    for(var i = 0; i < this.cookiesSold.length; i++) {
      cookies = cookies + this.cookiesSold[i];
    }
    return cookies;
  }
};
Seattle.setCusPerHour();
for(var i = 0; i < storeHours.length - 1; i++) {
  Seattle.setCookiesSold();
}

var Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  custPerHour: 0,
  setCusPerHour: function() {
    this.custPerHour = randomNumber(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function() {
    this.setCusPerHour();
    this.cookiesSold.push(Math.floor(this.custPerHour * this.avgCook));
  },
  totalCookies: function() {
    var cookies = 0;
    for(var i = 0; i < this.cookiesSold.length; i++) {
      cookies = cookies + this.cookiesSold[i];
    }
    return cookies;
  }
};
Tokyo.setCusPerHour();
for(var i = 0; i < storeHours.length - 1; i++) {
  Tokyo.setCookiesSold();
}

var Dubai = {
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  custPerHour: 0,
  setCusPerHour: function() {
    this.custPerHour = randomNumber(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function() {
    this.setCusPerHour();
    this.cookiesSold.push(Math.floor(this.custPerHour * this.avgCook));
  },
  totalCookies: function() {
    var cookies = 0;
    for(var i = 0; i < this.cookiesSold.length; i++) {
      cookies = cookies + this.cookiesSold[i];
    }
    return cookies;
  }
}
Dubai.setCusPerHour();
for(var i = 0; i < storeHours.length - 1; i++) {
  Dubai.setCookiesSold();
}

var Paris = {
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  custPerHour: 0,
  setCusPerHour: function() {
    this.custPerHour = randomNumber(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function() {
    this.setCusPerHour();
    this.cookiesSold.push(Math.floor(this.custPerHour * this.avgCook));
  },
  totalCookies: function() {
    var cookies = 0;
    for(var i = 0; i < this.cookiesSold.length; i++) {
      cookies = cookies + this.cookiesSold[i];
    }
    return cookies;
  }
}
Paris.setCusPerHour();
for(var i = 0; i < storeHours.length - 1; i++) {
  Paris.setCookiesSold();
}

var Lima = {
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  custPerHour: 0,
  setCusPerHour: function() {
    this.custPerHour = randomNumber(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function() {
    this.setCusPerHour();
    this.cookiesSold.push(Math.floor(this.custPerHour * this.avgCook));
  },
  totalCookies: function() {
    var cookies = 0;
    for(var i = 0; i < this.cookiesSold.length; i++) {
      cookies = cookies + this.cookiesSold[i];
    }
    return cookies;
  }
}
Lima.setCusPerHour();
for(var i = 0; i < storeHours.length - 1; i++) {
  Lima.setCookiesSold();
}

var root = document.getElementById('root');

var seattleUl = document.createElement('ul');
seattleUl.setAttribute('id', 'seattle')
for(var i = 0; i < storeHours.length - 1; i++) {
  var li = document.createElement('li');
  li.textContent = 'At ' + storeHours[i] + ' we sold ' + Seattle.cookiesSold[i] + '.';
  seattleUl.appendChild(li);
}
var totalSeattle = document.createElement('li');
totalSeattle.textContent = 'Total cookies sold: ' + Seattle.totalCookies();
seattleUl.appendChild(totalSeattle);
root.appendChild(seattleUl);

var tokyoUl = document.createElement('ul');
tokyoUl.setAttribute('id', 'tokyo')
for(var i = 0; i < storeHours.length - 1; i++) {
  var li = document.createElement('li');
  li.textContent = 'At ' + storeHours[i] + ' we sold ' + Tokyo.cookiesSold[i] + '.';
  tokyoUl.appendChild(li);
}
var totalTokyo = document.createElement('li');
totalTokyo.textContent = 'Total cookies sold: ' + Tokyo.totalCookies();
tokyoUl.appendChild(totalTokyo);
root.appendChild(tokyoUl);

var dubaiUl = document.createElement('ul');
dubaiUl.setAttribute('id', 'dubai')
for(var i = 0; i < storeHours.length - 1; i++) {
  var li = document.createElement('li');
  li.textContent = 'At ' + storeHours[i] + ' we sold ' + Dubai.cookiesSold[i] + '.';
  dubaiUl.appendChild(li);
}
var totalDubai = document.createElement('li');
totalDubai.textContent = 'Total cookies sold: ' + Dubai.totalCookies();
dubaiUl.appendChild(totalDubai);
root.appendChild(dubaiUl);

var parisUl = document.createElement('ul');
parisUl.setAttribute('id', 'paris')
for(var i = 0; i < storeHours.length - 1; i++) {
  var li = document.createElement('li');
  li.textContent = 'At ' + storeHours[i] + ' we sold ' + Paris.cookiesSold[i] + '.';
  parisUl.appendChild(li);
}
var totalParis = document.createElement('li');
totalParis.textContent = 'Total cookies sold: ' + Paris.totalCookies();
parisUl.appendChild(totalParis);
root.appendChild(parisUl);

var limaUl = document.createElement('ul');
limaUl.setAttribute('id', 'lima')
for(var i = 0; i < storeHours.length - 1; i++) {
  var li = document.createElement('li');
  li.textContent = 'At ' + storeHours[i] + ' we sold ' + Lima.cookiesSold[i] + '.';
  limaUl.appendChild(li);
}
var totalLima = document.createElement('li');
totalLima.textContent = 'Total cookies sold: ' + Lima.totalCookies();
limaUl.appendChild(totalLima);
root.appendChild(limaUl);