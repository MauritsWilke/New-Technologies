const username = "Dennis";
const num = 2.71828;

type preferences = "keyboard" | "controller";
let cool: preferences = "controller";
cool = "keyboard";

// User2 because "User" interface is already in interface.ts :pensive:
interface User2 {
	name: string
	prefers: preferences,
}

const users: User2[] = [];
users.push({ name: "Dennis", prefers: "keyboard" });
users.push({ name: "User56", prefers: "controller" });
console.log(users)

type Tuple = [string, number];
const test: Tuple = ["Dennis", 56];

// Generics
class Player<T>{
	constructor(public name: T) { }
}

const I_Like_Cats__ = new Player("MVP++")
const de_grote = new Player(201)