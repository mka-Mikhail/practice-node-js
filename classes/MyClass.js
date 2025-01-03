class MyClass {
	#privateField

	publicField

	static staticField = 'staticField'

	constructor() {
		this.publicField = 'publicField'
		this.#privateField = 'privateField'
	}

	get privateField() {
		return this.#privateField
	}

	set privateField(newValue) {
		this.#privateField = newValue
	}

	method() {
		this.#privateMethod()
	}

	#privateMethod() {
		console.log('privateMethod')
	}

	static staticMethod() {
		console.log('staticMethod')
	}
}

export default MyClass
