import managerConsumers from '../consumers/ManagerConsumers.js'
import DataSourceOne from './data-sources/DataSourceOne.js'
import DataSourceTwo from './data-sources/DataSourceTwo.js'

class ManagerDataSources {
	constructor() {
		this.dataSources = []
	}

	createDataSources() {
		this.dataSources.push(
			{ config: new DataSourceOne(1) },
			{ config: new DataSourceTwo(2) },
			{ config: new DataSourceOne(3) }
		)
	}

	setAndWriteData(dataSourceId, data) {
		managerConsumers.distributeData(dataSourceId, data)
	}
}

const managerDataSources = new ManagerDataSources
export default managerDataSources