interface User {
	name: string;
	subscription: "premium" | "default";
	[key: string]: any;
}

let dennis: User = {
	name: "Dennis",
	subscription: "premium",
	note: "Dennis is doing great in life!"
};
dennis.subscription = "default";
console.log(dennis);