import managerConsumers from './consumers/ManagerConsumers.js'
import managerDataSources from './data-sources/ManagerDataSources.js'

managerConsumers.createConsumers()
managerDataSources.createDataSources()

managerDataSources.dataSources.forEach((dataSource) => {
	console.log(dataSource.config.id)
})