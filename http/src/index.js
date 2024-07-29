let id = 1

let variables = document.getElementsByClassName('variables').item(0)

const deleteVariable = (clickedButton) => {
	document.getElementById('var' + clickedButton.target.id).remove()
}

const addVariableFields = () => {
	let newVariable = document.createElement('div')
	newVariable.setAttribute('id', 'var' + id)
	newVariable.setAttribute('class', 'variable')
	let nameOfVar = document.createElement('input')
	nameOfVar.setAttribute('placeholder', 'Название')
	nameOfVar.setAttribute('name', 'nameOfVar' + id)
	nameOfVar.setAttribute('type', 'text')
	nameOfVar.setAttribute('class', 'cred')
	let valueOfVar = document.createElement('input')
	valueOfVar.setAttribute('placeholder', 'Значение')
	valueOfVar.setAttribute('name', 'valueOfVar' + id)
	valueOfVar.setAttribute('type', 'text')
	valueOfVar.setAttribute('class', 'cred')
	let deleteVariableButton = document.createElement('button')
	deleteVariableButton.setAttribute('id', id)
	deleteVariableButton.setAttribute('class', 'delete-variable-button')
	deleteVariableButton.setAttribute('type', 'button')
	deleteVariableButton.textContent = 'Удалить'
	deleteVariableButton.addEventListener('click', deleteVariable)
	newVariable.appendChild(nameOfVar)
	newVariable.appendChild(valueOfVar)
	newVariable.appendChild(deleteVariableButton)
	variables.appendChild(newVariable)
	id++
}

let addVariableButton = document.getElementById('addVariable')
addVariableButton.addEventListener('click', addVariableFields)

const sendData = () => {
	let namesOfVariables = []
	let valuesOfVariables = []
	document.querySelectorAll('input[name^=nameOfVar]').forEach((nameOfVar) => namesOfVariables.push(nameOfVar.value))
	document.querySelectorAll('input[name^=valueOfVar]').forEach((valueOfVar) => valuesOfVariables.push(valueOfVar.value))
	let variables = []
	for (let i = 0; i < namesOfVariables.length; i++) {
		let variable = {}
		variable[namesOfVariables[i]] = valuesOfVariables[i]
		variables.push(variable)
	}
}

let sendDataButton = document.getElementById('sendData')
sendDataButton.addEventListener('click', sendData)
