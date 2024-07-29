// let array = [
// 	{ id: 1, name: 'name 1', flag: true },
// 	{ id: 2, name: 'name 2', flag: false },
// 	{ id: 3, name: 'name 3', flag: true },
// 	{ id: 4, name: 'name 4', flag: true },
// 	{ id: 5, name: 'name 5', flag: false }
// ]

// let nums = [1, 2, 3, 4, 5]

// console.log('ИСХОДНЫЙ МАССИВ')
// console.log(nums)

// nums.forEach((num, it, i) => {
// 	i[it] = 0
// })
// console.log('ИЗМЕНЁННЫЙ ИСХОДНЫЙ МАССИВ')
// console.log(nums)

// let arrayAfterMapping = array.map((el) => {
// 	return { ...el, newField: 'qwer' }
// })
// console.log('МАССИВ ПОСЛЕ МАППИНГА')
// console.log(arrayAfterMapping)

// array.forEach((el) => {
// 	if (el.flag) {
// 		el = { id: -1, name: 'QWER', flag: false }
// 	}
// })
// console.log('ИЗМЕНЁННЫЙ ИСХОДНЫЙ МАССИВ')
// console.log(array)

// let arrayAfterFiltering = array.filter((el) => el.flag)
// console.log('МАССИВ ПОСЛЕ ФИЛЬТРАЦИИ ПО flag')
// console.log(arrayAfterFiltering)

let array1 = [
	{ a: 'qqq', b: 'www', c: 'ooo' },
	{ a: 'EEE', b: 'ijn', c: 'onl' },
	{ a: '[]]', b: 'ppp', c: 'yyy' },
]
let array2 = [
	{ a: 'qqq', b: 'www', c: 'ooo' },
	{ a: 'EEE', b: 'ijn', c: 'onl' },
	{ a: '[]]', b: 'ppp', c: 'yyy' },
	{ a: 'sdv', b: '---', c: '===' },
]

let result = []
for (let i = 0; i < array1.length; i++) {
	for (let key of Object.keys(array1[i])) {
		if (array1[i][key] !== array2[i][key]) {
			result.push(array2[i])
			break
		}
	}
}
array2.slice(array1.length).forEach((el) => result.push(el))

console.log(result)