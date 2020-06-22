var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

function randomNumber(minHourCus, maxHourCus) {
  return Math.floor(Math.random() * (maxHourCus - minHourCus + 1));
}

var Seattle = {
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  custPerHour: 0,
  setCusPerHour: function() {
    this.cusPerHour = randomNumber(this.minCust, this.maxCust) + ' customers.';
    console.log(this.cusPerHour);
  },
  cookiesSold: [],
};
Seattle.setCusPerHour();

var Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  custPerHour: 0,
  setCusPerHour: function() {
    this.cusPerHour = randomNumber(this.minCust, this.maxCust) + ' customers.';
    console.log(this.cusPerHour);
  },
  cookiesSold: [],
};
Tokyo.setCusPerHour();

var Dubai = {
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  custPerHour: 0,
  setCusPerHour: function() {
    this.cusPerHour = randomNumber(this.minCust, this.maxCust) + ' customers.';
    console.log(this.cusPerHour);
  },
  cookiesSold: [],
}
Dubai.setCusPerHour();

var Paris = {
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  custPerHour: 0,
  setCusPerHour: function() {
    this.cusPerHour = randomNumber(this.minCust, this.maxCust) + ' customers.';
    console.log(this.cusPerHour);
  },
  cookiesSold: [],
}
Paris.setCusPerHour();

var Lima = {
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  custPerHour: 0,
  setCusPerHour: function() {
    this.cusPerHour = randomNumber(this.minCust, this.maxCust) + ' customers.';
    console.log(this.cusPerHour);
  },
  cookiesSold: [],
}
Lima.setCusPerHour();

var root = document.getElementById('root');

var seattleUl = document.createElement('ul');
seattleUl.setAttribute('id', 'seattle')
for(var i = 0; i < storeHours.length - 1; i++) {
  var li = document.createElement('li');
  li.textContent = 'At ' + storeHours[i] + ' we sold ' + Seattle.cookiesSold[i] + '.';
  seattleUl.appendChild(li);
}
var totalSeattle = document.createElement('li');
totalSeattle.textContent = 'Total cookies sold: ' + Seattle.totalSold;
seattleUl.appendChild(totalSeattle);
root.appendChild(seattleUl);
