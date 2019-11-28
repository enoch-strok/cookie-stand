'use strict';

var firstAndPikeElement = document.getElementById('firstAndPike');

//create the element
// var liEl = document.createElement('li');

//give the element content
// liEl.textContent = 'proof of life';

//append to the DOM
// firstAndPikeElement.appendChild(liEl);

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};



var SeatleShop = {
    minCustomerEachHour: 23,
    maxCustomerEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookieForTheDay: 0,

    hourlySales: function() {
        for (var i = 0; i < hours.length; i++) {
            var random = randomNumber(this.minCustomerEachHour,this.maxCustomerEachHour);
            this.customersEachHour.push(random);
            var cookieEachHourMath = Math.floor(random * this.averageCookiesPerCustomer);
            this.cookiesEachHour.push(cookieEachHourMath);
            this.totalCookieForTheDay = this.totalCookieForTheDay + cookieEachHourMath;
        }
    },


    render: function () {
        this.hourlySales();
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            firstAndPikeElement.appendChild(liEl);
        };

        var liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookieForTheDay} cookies`;
        firstAndPikeElement.appendChild(liEl);
    },



};



SeatleShop.render();