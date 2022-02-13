describe("Jest testing", () => {

	beforeAll(() => {
		console.log("started the testing!")
	})

	beforeEach(() => {
		console.log("testing next component")
	})

	it("should multiply numbers", () => {
		expect(10 * 2).toBe(20)
	});

	it.todo("can also divide numbers")
})
