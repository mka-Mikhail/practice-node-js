import http from 'node:http'
import fs from 'node:fs/promises'

const API_KEY = 'dfshb08fs7dbysdufhg34098y-9e8wbywrugh43'

const PORT = 3000

let server = http.createServer(async (req, res) => {
	switch (req.url) {
		// case '/':
		// 	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
		// 	res.end(await fs.readFile('./http/src/index.html', 'utf-8'))
		// 	break
		// case '/style.css':
		// 	res.writeHead(200, { 'Content-Type': 'text/css' })
		// 	res.end(await fs.readFile('./http/src/style.css', 'utf-8'))
		// 	break
		// case '/index.js':
		// 	res.writeHead(200, { 'Content-Type': 'text/js' })
		// 	res.end(await fs.readFile('./http/src/index.js', 'utf-8'))
		// 	break
		case '/api':
			if (req.method === 'POST') {
				if (req.headers['api-key'] === API_KEY) {
					res.writeHead(200, { 'Content-Type': 'text/json' })
					let body = ''
					req.on('data', (data) => {
						body += data
					})
					req.on('end', () => {
						try {
							let data = JSON.parse(body)
							data = [data]
							console.log(data)
							res.end(JSON.stringify({ message: 'data received' }))
						} catch (e) {
							res.end(JSON.stringify({ message: 'incorrect data' }))
						}
					})
					break
				} else {
					res.writeHead(400, { 'Content-Type': 'text/json' })
					res.end(JSON.stringify({ message: 'bad key' }))
				}
			} else {
				res.writeHead(400, { 'Content-Type': 'text/json' })
				res.end(JSON.stringify({ message: 'incorrect method' }))
			}
	}
})

server.listen(PORT, () => {
	console.info(`СЕРВЕР СТАРТАНУЛ НА ПОРТУ ${PORT}`)
})