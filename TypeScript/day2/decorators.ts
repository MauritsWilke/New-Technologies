

class Player {
	@Emoji()
	name = "I_Like_Cats__";
}

function Emoji() {
	return function (target: Object, key: string | symbol) {
		let val: any = target[key];

		const getter = () => {
			return `🐈 ${val}`;
		}

		const setter = (next: any) => val = next;

		Object.defineProperty(target, key, {
			get: getter,
			set: setter,
			enumerable: true,
			configurable: true
		})
	}
}

const user = new Player();
console.log(user.name)

export { };