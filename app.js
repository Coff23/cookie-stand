// "use strict"
// THIS IS THE CODE I USED YESTERDAY. TEST IS THE NEW CODE.
// let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let rngNumbers = [];
// for (let i = 0; i < hours.length; i++) {
//     let hoursOfTheDay = document.getElementById("time-row");
//     let td = document.createElement("td");
//     td.textContent = hours[i];
//     hoursOfTheDay.appendChild(td);
// }

// function generateBetween(a, b) {
//     return Math.ceil(Math.random() * (b - a + 1)) + a;
// }

// const location1 = {
//     locationCity: "seattle",
//     minHourly: parseInt(23),
//     maxHourly: parseInt(65),
//     averagePurchase: parseInt(6.3),
//     hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
//         let cookiesPerHourSeattle = [];
//         for (let i = 0; i < hours.length; i++) {
//             let rngNum = generateBetween(this.minHourly, this.maxHourly);
//             let hourlyCookies = averagePurchase * rngNum[0];
//             cookiesPerHourSeattle.push(Math.ceil(rngNum * this.averagePurchase));

//             let cookiesPerHourSeattleElement = document.getElementById("seattle-row");
//             let td = document.createElement("td");
//             td.textContent = cookiesPerHourSeattle[i];
//             cookiesPerHourSeattleElement.appendChild(td);
//         }
//     }
// }
// location1.hourlyCookies();

// const location2 = {
//     locationCity: "tokyo",
//     minHourly: parseInt(3),
//     maxHourly: parseInt(24),
//     averagePurchase: parseInt(1.2),
//     hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
//         let cookiesPerHourTokyo = [];
//         for (let i = 0; i < hours.length; i++) {
//             let rngNum = generateBetween(this.minHourly, this.maxHourly);
//             let hourlyCookies = averagePurchase * rngNum[0];
//             cookiesPerHourTokyo.push(Math.ceil(rngNum * this.averagePurchase));

//             let cookiesPerHourTokyoElement = document.getElementById("tokyo-row");
//             let td = document.createElement("td");
//             td.textContent = cookiesPerHourTokyo[i];
//             cookiesPerHourTokyoElement.appendChild(td);
//         }
//     }
// }
// location2.hourlyCookies();

// const location3 = {
//     locationCity: "dubai",
//     minHourly: parseInt(11),
//     maxHourly: parseInt(38),
//     averagePurchase: parseInt(3.7),
//     hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
//         let cookiesPerHourDubai = [];
//         for (let i = 0; i < hours.length; i++) {
//             let rngNum = generateBetween(this.minHourly, this.maxHourly);
//             let hourlyCookies = averagePurchase * rngNum[0];
//             cookiesPerHourDubai.push(Math.ceil(rngNum * this.averagePurchase));

//             let cookiesPerHourDubaiElement = document.getElementById("dubai-row");
//             let td = document.createElement("td");
//             td.textContent = cookiesPerHourDubai[i];
//             cookiesPerHourDubaiElement.appendChild(td);
//         }
//     }
// }
// location3.hourlyCookies();

// const location4 = {
//     locationCity: "paris",
//     minHourly: parseInt(20),
//     maxHourly: parseInt(38),
//     averagePurchase: parseInt(2.3),
//     hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
//         let cookiesPerHourParis = [];
//         for (let i = 0; i < hours.length; i++) {
//             let rngNum = generateBetween(this.minHourly, this.maxHourly);
//             let hourlyCookies = averagePurchase * rngNum[0];
//             cookiesPerHourParis.push(Math.ceil(rngNum * this.averagePurchase));

//             let cookiesPerHourParisElement = document.getElementById("paris-row");
//             let td = document.createElement("td");
//             td.textContent = cookiesPerHourParis[i];
//             cookiesPerHourParisElement.appendChild(td);
//         }
//     }
// }
// location4.hourlyCookies();

// const location5 = {
//     locationCity: "lima",
//     minHourly: parseInt(2),
//     maxHourly: parseInt(16),
//     averagePurchase: parseInt(4.6),
//     hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
//         let cookiesPerHourLima = [];
//         for (let i = 0; i < hours.length; i++) {
//             let rngNum = generateBetween(this.minHourly, this.maxHourly);
//             let hourlyCookies = averagePurchase * rngNum[0];
//             cookiesPerHourLima.push(Math.ceil(rngNum * this.averagePurchase));

//             let cookiesPerHourLimaElement = document.getElementById("lima-row");
//             let td = document.createElement("td");
//             td.textContent = cookiesPerHourLima[i];
//             cookiesPerHourLimaElement.appendChild(td);
//         }
//     }
// }
// location5.hourlyCookies();


// function renderTotals() {
//     let totalsAcross = [];
//     let total = 0;
//     for (let i = 0; i < hours.length; i++) {
//         let totalsAcross = location1.hourlyCookies[i] + location2.hourlyCookies[i] + location3.hourlyCookies[i] + location4.hourlyCookies[i] + location5.hourlyCookies[i];
//         totalsAcross.push(totalsAcross);
//         console.log(totalsAcross);

//         let totalsAcrossElement = document.getElementById("totals-row");
//         let td = document.createElement("td");
//         td.textContent = totalsAcross;
//         totalsAcrossElement.appendChild(td);
//     }
// }