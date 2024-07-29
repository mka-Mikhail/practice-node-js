import csvParser from 'csv-parser'
import fs from 'node:fs'

export const read = () => {
	let result = []
	fs.createReadStream('C:\\Users\\пользователь\\Downloads\\ТЕСТОВЫЕ ИСТОЧНИКИ ДАННЫХ\\bigCSV.csv')
		.pipe(csvParser({ separator: ';' }))
		.on('data', (data) => result.push(data))
		// .on('end', () => console.log(result))
}