

export default class Square {
	constructor(public height: number) { }

	get area(): number {
		return this.height ** 2
	}
}