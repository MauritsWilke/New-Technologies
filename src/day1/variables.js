"use strict";
const username = "Dennis";
const num = 2.71828;
let cool = "controller";
cool = "keyboard";
const users = [];
users.push({ name: "Dennis", prefers: "keyboard" });
users.push({ name: "User56", prefers: "controller" });
console.log(users);
const test = ["Dennis", 56];
// Generics
class Player {
    name;
    constructor(name) {
        this.name = name;
    }
}
const I_Like_Cats__ = new Player("MVP++");
const de_grote = new Player(201);
