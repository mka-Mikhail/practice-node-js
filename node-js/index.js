import child_process from 'child_process'
import path from 'path'
import process from 'process'
import readline from 'readline/promises'
import { stdin, stdout } from 'process'
import fs from 'fs/promises'

// let pathToFile = 'C:/Users/пользователь/Downloads/ТЕСТОВЫЕ ИСТОЧНИКИ ДАННЫХ'
// console.log(path.normalize(pathToFile))
// console.log(path.dirname(pathToFile))
// child_process.exec(`start "" "${pathToFile}"`)

// console.log(process.platform)

const rl = readline.createInterface(stdin, stdout)

let pathToFile = ''

// stdin.addListener('data', (data) => {
// 	console.log("ECHO: " + data.toString())
// })

console.log(process.cwd())

const answer = await rl.question('Enter file name for writing\n')
pathToFile = './' + answer
await fs.open(pathToFile, 'w')

// rl.on('line', async (stroke) => {
// 	await fs.appendFile(pathToFile, stroke + '\n')
// })