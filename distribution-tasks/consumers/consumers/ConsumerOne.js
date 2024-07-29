export default class ConsumerOne {
	constructor(id, dataSourceId) {
		this.name = 'consumer ' + id
		this.dataSourceId = dataSourceId
	}

	write(data) {
		console.log(`ДАННЫЕ В ПОТРЕБИТЕЛЕ ${this.name}`)
		console.log(data)
	}
}