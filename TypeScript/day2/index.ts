// const Object :wheeze:
enum Names {
	Dennis,
	Dennis2
}

interface User {
	name: Names.Dennis,
	age: number
}

let me: User = {
	name: Names.Dennis, // Only Dennis allowed
	age: 20
};


enum Settings {
	Success = ":)",
	Error = ":(",
	Default = " > "
}

function Wrap() {
	return function (target: Object, key: string | symbol) {
		let val = target[key];

		const setter = (next: string) => {
			val = ``
		}
	}

}

class Error {

	@Wrap()
	message: string;

	constructor(message: string, public type: string) {
		this.message = message
	}

	log() {
		console.log(this.message)
	}
}

const oops = new Error("Something went wrong", "Success");
oops.log();



export { };