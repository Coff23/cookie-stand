"use strict"

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let rngNumbers = [];
console.log(hours);
console.log(rngNumbers);
// let cookiesPerHour = [];
// console.log(cookiesPerHour);

function generateBetween(a, b) {
    return Math.ceil(Math.random() * (b - a + 1)) + a;
}

const location1 = {
    locationCity: "seattle",
    minHourly: parseInt(23),
    maxHourly: parseInt(65),
    averagePurchase: parseInt(6.3),
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        var cookiesPerHourSeattle = [];
        for (var i = 0; i < hours.length; i++) {
            var rngNum = generateBetween(this.minHourly, this.maxHourly);
            console.log(rngNum);
            var hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourSeattle.push(Math.ceil(rngNum * this.averagePurchase));
            console.log(cookiesPerHourSeattle);

            var cookiesPerHourSeattleElement = document.getElementById("list-1");
            var liElement = document.createElement("seattle-list");
            liElement.textContent = cookiesPerHourSeattle[i];
            cookiesPerHourSeattleElement.appendChild(liElement);
            console.log(liElement);
        }
    }
}
location1.hourlyCookies();

const location2 = {
    locationCity: "tokyo",
    minHourly: 3,
    maxHourly: 24,
    averagePurchase: 1.2,
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourTokyo = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourTokyo.push(Math.ceil(rngNum * this.averagePurchase));
            console.log(cookiesPerHourTokyo);
        }
    }
}
location2.hourlyCookies();

const location3 = {
    locationCity: "dubai",
    minHourly: 11,
    maxHourly: 38,
    averagePurchase: 3.7,
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourDubai = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourDubai.push(Math.ceil(rngNum * this.averagePurchase));
            console.log(cookiesPerHourDubai);
        }
    }
}
location3.hourlyCookies();

const locatation4 = {
    locationCity: "paris",
    minHourly: 20,
    maxHourly: 38,
    averagePurchase: 2.3,
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourParis = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourParis.push(Math.ceil(rngNum * this.averagePurchase));
            console.log(cookiesPerHourParis);
        }
    }
}
locatation4.hourlyCookies();

const location5 = {
    locationCity: "lima",
    minHourly: 2,
    maxHourly: 16,
    averagePurchase: 4.6,
    hourlyCookies: function (minHourly, maxHourly, averagePurchase) {
        let cookiesPerHourLima = [];
        for (let i = 0; i < hours.length; i++) {
            let rngNum = generateBetween(this.minHourly, this.maxHourly);
            let hourlyCookies = averagePurchase * rngNum[0];
            cookiesPerHourLima.push(Math.ceil(rngNum * this.averagePurchase));
            console.log(cookiesPerHourLima);
        }
    }
}
location5.hourlyCookies();
