class ClassA {
	static a = 10

	constructor(param1) {
		this.param1 = param1
		ClassA.method1(' in constructor')
	}

	static method1(n) {
		console.log('ABRACADABRA' + n)
	}
}

ClassA.method1(1)
console.log(ClassA.a)
ClassA.a = 15

export default ClassA