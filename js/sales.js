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
