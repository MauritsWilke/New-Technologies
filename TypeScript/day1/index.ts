function fizzBuzz(num: number) {
	for (let i = 1, log: string = ""; i < num; i++, log = '') {
		if (i % 3 === 0) log += "Fizz";
		if (i % 5 === 0) log += "Buzz";
		console.log(log || i);
	}
}

fizzBuzz(20)