// let countOfTurns = 0
// let last = new Date()
// let next
// let phases = ['|', '/', '-', '\\', '|', '/', '-', '\\']
// let numOfPhase
// let prefix = 'Число оборотов: '
//
// while (countOfTurns !== 3) {
// 	numOfPhase = 0
// 	while (numOfPhase !== phases.length) {
// 		next = new Date()
// 		if (next.getSeconds() - last.getSeconds() === 1) {
// 			process.stdout.write(`\r${prefix}${countOfTurns}\t\t\t${phases[numOfPhase]}`)
// 			numOfPhase++
// 			last = next
// 		}
// 	}
// 	countOfTurns++
// }

let last = new Date()
let next
let filler = '='
let fillers = ''

while (true) {
	next = new Date()
	if (next.getSeconds() - last.getSeconds() === 1) {
		fillers += filler
		process.stdout.write(`\r[${fillers}]`)
		last = next
	}
}