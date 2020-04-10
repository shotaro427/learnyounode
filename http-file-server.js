
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    const src = fs.createReadStream(process.argv[3], 'utf8');
    src.pipe(res)
})

server.listen(Number(process.argv[2]))