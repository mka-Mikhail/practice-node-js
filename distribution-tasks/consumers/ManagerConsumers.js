import ConsumerOne from './consumers/ConsumerOne.js'

class ManagerConsumers {
	constructor() {
		this.consumers = []
	}

	createConsumers() {
		this.consumers.push(
			new ConsumerOne(1, 1),
			new ConsumerOne(2, 3),
			new ConsumerOne(3, 1)
		)
	}

	distributeData(dataSourceId, data) {
		console.log('\nПОСТУПИЛИ ДАННЫЕ В МЕНЕДЖЕР ПОТРЕБИТЕЛЕЙ')
		console.log(data)
		this.consumers.forEach((consumer) => {
			if (dataSourceId === consumer.dataSourceId) {
				consumer.write(data)
			}
		})
	}
}

const managerConsumers = new ManagerConsumers
export default managerConsumers