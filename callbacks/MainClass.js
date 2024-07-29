export default class MainClass {
	constructor(method) {
		this.method = method
	}

	startMethod() {
		this.method()
	}
}