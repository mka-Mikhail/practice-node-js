import MyClass from './MyClass.js'

console.log(MyClass.staticField)

MyClass.staticMethod()

let myObject = new MyClass()

console.log(myObject.privateField)

myObject.privateField = 'new value'

console.log(myObject.privateField)

console.log(myObject.publicField)

myObject.method()
