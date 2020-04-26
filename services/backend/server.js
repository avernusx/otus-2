const http = require('http')
const port = 8080

const requestHandler = (request, response) => {
  if (request.url == '/health' || request.url == '/health/') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({
      status: "OK"
    }))
  } else if (request.url == '/') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end("Server is running")
  } else {
    response.statusCode = 404
    response.end("404")
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('При запуске сервера произошла ошибка', err)
  }
  console.log(`Сервер на порту ${port} запущен`)
})