import fs from 'node:fs/promises'

const readData = async () => {
	let data = await fs.readFile('C:\\Users\\пользователь\\Downloads\\ТЕСТОВЫЕ ИСТОЧНИКИ ДАННЫХ\\bigCSV.csv', { encoding: 'utf8' })
	return data
}

const handleDataFile = (data, isAllDataPrinting) => {
	let namesOfVariables = []
	data = data.replace(/\0/g, '')
	let rows = data.trim().split(/[\r\n]+/)
	let i = 0
	if (isAllDataPrinting) {
		let regs = rows[0].matchAll(/(?<varName>("(("")*[^"]*?("")*)+")|([^;]+))($|;)/g)
		for (let reg of regs) {
			namesOfVariables.push(reg.groups.varName)
		}
		i = 1
	}
	let result = []
	for (i; i < rows.length; i++) {
		let arrayOfValuesInRow = []
		let regs = rows[i].matchAll(/(?<varValue>("(("")*[^"]*?("")*)+")|([^;]+))($|;)/g)
		let mas = Array.from(regs)
		for (let reg of mas) {
			let originStringFromFile = ''
			originStringFromFile = reg.groups.varValue.includes(';') || reg.groups.varValue.includes('"') ? reg.groups.varValue.substring(1, reg.groups.varValue.length - 1) : reg.groups.varValue
			originStringFromFile = originStringFromFile.replace(/""/g, `"`)
			arrayOfValuesInRow.push(originStringFromFile)
		}
		let resultRow = {}
		for (let j = 0; j < namesOfVariables.length; j++) {
			resultRow[namesOfVariables[j]] = arrayOfValuesInRow[j] ? arrayOfValuesInRow[j] : ''
		}
		result.push(resultRow)
	}
	return result
}

export const getData = async () => {
	handleDataFile(await readData(), true)
	// console.log(handleDataFile(await readData(), true))
}