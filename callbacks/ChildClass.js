import MainClass from './MainClass.js'

export default class ChildClass extends MainClass{
	constructor() {
		super(() => {
			console.log('РЕАЛИЗОВАННЫЙ МЕТОД В ДОЧЕРНЕМ КЛАССЕ')
		})
	}
}