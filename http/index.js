import http from 'node:http'
import fs from 'node:fs/promises'

const PORT = 3000

const loadIndexHtml = async () => {
	return await fs.readFile('./http/src/index.html', 'utf-8')
}

let server = http.createServer(async (req, res) => {
	switch (req.method) {
		case 'GET':
			switch (req.url) {
				case '/':
					res.writeHead(200, {
						'Content-Type': 'text/html; charset=utf-8'
					})
					res.end(await loadIndexHtml())
					break
			}
			break
		case 'POST':
			switch (req.url) {
				case '/':
					let variables = []
					res.writeHead(200, {
						'Content-Type': 'text/html; charset=utf-8'
					})
					req.on('data', (data) => {
						data = data.toString().split('&')
						let variable = {}
						let nameOfVar
						for (let cred of data) {
							if (cred.split('=')[0] === 'nameOfVar') {
								nameOfVar = cred.split('=')[1]
								variable[nameOfVar] = ''
							} else if (cred.split('=')[0] === 'valueOfVar') {
								variable[nameOfVar] = cred.split('=')[1]
								variables.push(variable)
								variable = {}
							}
						}
						console.log(variables)
					})
					res.end(await loadIndexHtml())
					break
				case '/api':
					let body = ''
					res.writeHead(200, {
						'Content-Type': 'text/json; charset=utf-8'
					})
					req.on('data', (data) => {
						body += data
					})
					req.on('end', () => {
						console.log(body)
					})
					res.end()
					break
			}
			break
	}
})

server.listen(PORT, () => {
	console.info(`СЕРВЕР СТАРТАНУЛ НА ПОРТУ ${PORT}`)
})