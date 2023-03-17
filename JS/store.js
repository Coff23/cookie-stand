"use strict"

let pendingOrder = [];
let cookie = 1;
let shirt = 10;
let cart = [];

function orders (name, address, cookies, shirts, specialInstructions) {
    this.name = name;
    this.address = address;
    this.cookies = cookies;
    this.shirts = shirts;
    this.specialInstructions = this.specialInstructions;
    //this.cart = [];
    pendingOrder.push(this);
}

let totalCost = function () {
    for (let i = 0; i < cart; i++){
        if (cart[i] == cookie){
            let cost = this.cookies * cookie
        }
    }
}
totalCost();