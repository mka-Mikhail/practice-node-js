import managerDataSources from '../ManagerDataSources.js'

export default class DataSourceOne {
	constructor(id) {
		this.id = id
		setInterval(() => {
			managerDataSources.setAndWriteData(this.id, 'FROM ds1, POLLING: 3000')
		}, 3000)
	}
}