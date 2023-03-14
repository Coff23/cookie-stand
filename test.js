"use strict"

let tableContent = [];
const tableBody = document.getElementById("table-body");
const body = document.getElementById("values");

let hours = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"];
let rngNumbers = [];

//row for hours
const tableRowHours = document.createElement("tr");
let tdHours = document.createElement("td");
tdHours.textContent = "Time";
tableRowHours.appendChild(tdHours);
body.appendChild(tableRowHours);

for (let i = 0; i < hours.length; i++) {  // for loop to create table row

    let td = document.createElement("td");
    td.textContent = hours[i];
    tableRowHours.appendChild(td);
    body.appendChild(tableRowHours);
}

function generateBetween(a, b) {  // function to generate random number between a and b
    return Math.ceil(Math.random() * (b - a + 1)) + a;
}

function locations(locationCity, minHourly, maxHourly, averagePurchase) {  // function to generate random number between minHourly and maxHourly
    this.locationCity = locationCity;
    this.minHourly = minHourly;
    this.maxHourly = maxHourly;
    this.averagePurchase = averagePurchase;
    this.cookiesPerHour = [];
    this.totalCookies = 0
}

locations.prototype.hourlyCookies = function () {  // function to generate random number between minHourly and maxHourly
    for (let i = 0; i < hours.length; i++) {
        let rngNum = generateBetween(this.minHourly, this.maxHourly);
        let hourlyCookies = this.averagePurchase * rngNum[0];
        this.cookiesPerHour.push(Math.ceil(rngNum * this.averagePurchase));
        this.totalCookies += this.cookiesPerHour[i];
    }
    console.log(this.totalCookies);
}

locations.prototype.drawRow = function () {  // function to create table row for cookies
    this.hourlyCookies();
    let cookiesPerHour = [];
    const tableRow = document.createElement('tr');
    let tdcity = document.createElement('td');
    tdcity.textContent = this.locationCity;
    tableRow.appendChild(tdcity);

    for (let i = 0; i < hours.length; i++) {

        let td = document.createElement("td");
        td.textContent = this.cookiesPerHour[i];
        tableRow.appendChild(td);
    }
    body.appendChild(tableRow);
}

let totalArray = []; 

console.log(totalArray);

let seattle = new locations("Seattle", 23, 65, 6.3);
seattle.drawRow();

let tokyo = new locations("Tokyo", 3, 24, 1.2);
tokyo.drawRow();

let dubai = new locations("Dubai", 23, 65, 6.3);
dubai.drawRow();

let paris = new locations("Paris", 20, 38, 2.3);
paris.drawRow();

let lima = new locations("Lima", 2, 16, 4.6);
lima.drawRow();

const tableDataTotal = document.createElement("td");
let tdTotalAcross = document.createElement("td");
tdTotalAcross.textContent = "Total";
tableDataTotal.appendChild(tdTotalAcross);
body.appendChild(tableDataTotal);

// const tableRowTotal = document.createElement("tr");
// let tdTotalDown = document.createElement("tr");
// tdTotalDown.textContent = "Total";
// tableRowTotal.appendChild(tdTotalDown);
// body.appendChild(tableRowhours);
