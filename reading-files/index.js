import keypress from 'keypress'
import { read } from './read-csv-using-csv-parser.js'
import { getData } from './read-csv-using-custom-parser.js'

// keypress(process.stdin)
//
// process.stdin.on('keypress', (ch, key) => {
// 	if (key && key.name === 'escape') {
// 		process.exit(0)
// 	}
// })
// process.stdin.setRawMode(true)
// process.stdin.resume()

let start
let end

console.log('ЧТЕНИЕ С ПОМОЩЬЮ csv-parser')
start = performance.now()
read()
end = performance.now()
console.log(`ВРЕМЯ ЧТЕНИЯ: ${(end - start) / 1000}`)

console.log('ЧТЕНИЕ С ПОМОЩЬЮ custom-parser')
start = performance.now()
await getData()
end = performance.now()
console.log(`ВРЕМЯ ЧТЕНИЯ: ${(end - start) / 1000}`)