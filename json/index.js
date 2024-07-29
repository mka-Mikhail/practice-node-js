let a = {
	id: 1,
	name: 'a'
}

let stringA = JSON.stringify({ id: a.id, name: a.name })

console.log(stringA)