"use strict"

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let rngNumbers = [];

function generateBetween(a, b) {
    return Math.ceil(Math.random() * (b - a + 1)) + a;
}

const location1 = {
    locationCity: "seattle",
    minHourly: parseInt(23),
    maxHourly: parseInt(65),
    averagePurchase: parseInt(6.3),
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
         let cookiesPerHourSeattle = [];
        for (var i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourSeattle.push(Math.ceil(rngNum * this.averagePurchase));

            let cookiesPerHourSeattleElement = document.getElementById("list-1");
            let li = document.createElement("li");
            li.textContent = hours[i] + ": " + cookiesPerHourSeattle[i] + " cookies";
            cookiesPerHourSeattleElement.appendChild(li);
        }
    }
}
location1.hourlyCookies();

const location2 = {
    locationCity: "tokyo",
    minHourly: parseInt(3),
    maxHourly: parseInt(24),
    averagePurchase: parseInt(1.2),
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourTokyo = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourTokyo.push(Math.ceil(rngNum * this.averagePurchase));

            let cookiesPerHourTokyoElement = document.getElementById("list-2");
            let li = document.createElement("li");
            li.textContent = hours[i] + ": " + cookiesPerHourTokyo[i] + " cookies";
            cookiesPerHourTokyoElement.appendChild(li);
        }
    }
}
location2.hourlyCookies();

const location3 = {
    locationCity: "dubai",
    minHourly: parseInt(11),
    maxHourly: parseInt(38),
    averagePurchase: parseInt(3.7),
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourDubai = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourDubai.push(Math.ceil(rngNum * this.averagePurchase));

            let cookiesPerHourDubaiElement = document.getElementById("list-3");
            let li = document.createElement("li");
            li.textContent = hours[i] + ": " + cookiesPerHourDubai[i] + " cookies";
            cookiesPerHourDubaiElement.appendChild(li);
        }
    }
}
location3.hourlyCookies();

const locatation4 = {
    locationCity: "paris",
    minHourly: parseInt(20),
    maxHourly: parseInt(38),
    averagePurchase: parseInt(2.3),
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourParis = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourParis.push(Math.ceil(rngNum * this.averagePurchase));

            let cookiesPerHourParisElement = document.getElementById("list-4");
            let li = document.createElement("li");
            li.textContent = hours[i] + ": " + cookiesPerHourParis[i] + " cookies";
            cookiesPerHourParisElement.appendChild(li);
        }
    }
}
locatation4.hourlyCookies();

const location5 = {
    locationCity: "lima",
    minHourly: parseInt(2),
    maxHourly: parseInt(16),
    averagePurchase: parseInt(4.6),
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourLima = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourLima.push(Math.ceil(rngNum * this.averagePurchase));

            let cookiesPerHourLimaElement = document.getElementById("list-5");
            let li = document.createElement("li");
            li.textContent = hours[i] + ": " + cookiesPerHourLima[i] + " cookies";
            cookiesPerHourLimaElement.appendChild(li);
        }
    }
}
location5.hourlyCookies();
