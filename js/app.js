'use strict';

//[Done] array to show store hours
CookieShop.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//[Done] array to store all new cookie shops
CookieShop.allStores = [];

//[Done] A counter to tally all of the stores total
CookieShop.allStoresTotal = 0;

//[] Use document.getElement to store the table's id
CookieShop.tableDataEl = document.getElementById('tableData');

// var firstAndPikeElement = document.getElementById('firstAndPike');

//create the element
// var liEl = document.createElement('li');

//give the element content
// liEl.textContent = 'proof of life';

//append to the DOM
// firstAndPikeElement.appendChild(liEl);

//[Done] Costructor - Using the Object 'SeattleShop' as a template to create a constructor for all future shops.

function CookieShop(Loc, MinCust, MaxCust, AvgCookies) {
    this.Location = Loc;
    this.MinimumCustomer = MinCust;
    this.MaximumCustomersPerHour = MaxCust;
    this.AverageCookiesPerHour = AvgCookies;
    this.hourlyCookiesTotal = [];
    this.dailyCookies = 0;
    CookieShop.allStores.push(this);
    //generate cookies upon instantiation
    this.generateHourlyCookies();
    //generate shop row upon instantiation
    this.renderShopRow();
};

var randomCustomer = function (min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
};

CookieShop.prototype.generateHourlyCookies = function () {
    for (var i = 0; i < CookieShop.hours.length; i++) {
        var cookie = Math.ceil(this.AverageCookiesPerHour * randomCustomer(this.MinimumCustomer, this.MaximumCustomersPerHour));
        this.hourlyCookiesTotal.push(cookie);
        this.dailyCookies += cookie;
        CookieShop.allStoresTotal += cookie;
    }
};

// Function to render Header Row

var renderHeaderRow = function () {
    //create elements
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    //give the element content
    thEl.textContent = 'Location';
    //append element to the DOM
    trEl.appendChild(thEl);

    for (var i = 0; i < CookieShop.hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = CookieShop.hours[i];
        trEl.appendChild(tdEl);
    };
    var tdElem = document.createElement('td');
    tdElem.textContent = 'Total';
    trEl.appendChild(tdElem);
    CookieShop.tableDataEl.appendChild(trEl);
};



// CookieShop.tableDataEl.appendChild(trEl);

renderHeaderRow();

// Function to render Shop Row

CookieShop.prototype.renderShopRow = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.Location;
    trEl.appendChild(tdEl);

    for(var i = 0; i < this.hourlyCookiesTotal.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.hourlyCookiesTotal[i];
        trEl.appendChild(tdEl);
    }
    var tdElem = document.createElement('td');
    tdElem.textContent = this.dailyCookies;
    trEl.appendChild(tdElem);
    CookieShop.tableDataEl.appendChild(trEl);
};

// Function to render footer with totals

var renderFooterRow = function() {
    var trEl = document.createElement('tr'); 
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Hourly Totals: ';
    trEl.appendChild(tdEl);

    for( var i = 0; i < CookieShop.hours.length; i++) {
        var storesHourlyTotals = 0;
        var td = document.createElement('td');

        for( var j = 0; j < CookieShop.allStores.length; j++) {
            storesHourlyTotals += CookieShop.allStores[j].hourlyCookiesTotal[i];
        }
        td.textContent = storesHourlyTotals;
        trEl.appendChild(td);
    }

    var tdElem = document.createElement('td');
    tdElem.textContent = CookieShop.allStoresTotal;
    trEl.appendChild(tdElem);
    CookieShop.tableDataEl.appendChild(trEl);
};

new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 3.7);
new CookieShop('Lima', 2, 16, 4.6);

renderFooterRow();



console.log('proof of life')

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    var name = event.target.inputElementName.value;
    var age = event.target.inputElementAge.value;

    console.log('name: ', name);
    console.log('age: ', age);
};













// render: CookieShop.prototype.generateHourlyCookies();
// for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]}: ${this.hourlyCookiesTotal[i]} cookies`;
//     firstAndPikeElement.appendChild(liEl);
// };

// var liEl = document.createElement('li');
// liEl.textContent = `Total: ${this.dailyCookies} cookies`;
// firstAndPikeElement.appendChild(liEl);






//Object - For Seattle Only. Need to do this for all the other locations in a form of a constructor.


// var randomNumber = function(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// };

// var SeattleShop = {
//     minCustomerEachHour: 23,
//     maxCustomerEachHour: 65,
//     averageCookiesPerCustomer: 6.3,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     totalCookieForTheDay: 0,

//     hourlySales: function() {
//         for (var i = 0; i < hours.length; i++) {
//             var random = randomNumber(this.minCustomerEachHour,this.maxCustomerEachHour);
//             this.customersEachHour.push(random);
//             var cookieEachHourMath = Math.floor(random * this.averageCookiesPerCustomer);
//             this.cookiesEachHour.push(cookieEachHourMath);
//             this.totalCookieForTheDay = this.totalCookieForTheDay + cookieEachHourMath;
//         }
//     },


//     render: function () {
//         this.hourlySales();
//         for (var i = 0; i < hours.length; i++) {
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
//             firstAndPikeElement.appendChild(liEl);
//         };

//         var liEl = document.createElement('li');
//         liEl.textContent = `Total: ${this.totalCookieForTheDay} cookies`;
//         firstAndPikeElement.appendChild(liEl);
//     },



// };



// SeattleShop.render();