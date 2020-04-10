const net = require('net')

var date = new Date()
var formatedDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`

const server = net.createServer(function (socket) {
    socket.end(formatedDate)
})

server.listen(process.argv[2])