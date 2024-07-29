import managerDataSources from '../ManagerDataSources.js'

export default class DataSourceTwo {
	constructor(id) {
		this.id = id
		setInterval(() => {
			managerDataSources.setAndWriteData(this.id, 'FROM ds2, POLLING: 6000')
		}, 6000)
	}
}