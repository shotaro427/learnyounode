const http = require('http')

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return {unixtime: time.getTime()}
}

const server = http.createServer(function (req, res) {

    var url = new URL(req.url, "http://localhost:" + process.argv[2].toString())
    const time = new Date(url.searchParams.get('iso'))
    let result

    if (/^\/api\/parsetime/.test(req.url)) {
      result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
      result = unixtime(time)
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }

    // if (url.pathname.indexOf("parsetime") > 0) {
    //     var isoDate = new Date(url.searchParams.get("iso"))
    //     var jsonDate = JSON.stringify({"hour": isoDate.getHours(), "minute": isoDate.getMinutes(), "second": isoDate.getSeconds()})
    //     res.write(jsonDate)
    //     res.end()
    // } else if (url.pathname.indexOf("unixtime") > 0) {
    //     var isoDate = new Date(url.searchParams.get("iso")).getTime()
    //     var jsonDate = JSON.stringify({"unixtime": isoDate})
    //     res.write(jsonDate)
    //     res.end()
    // } else {
    //     res.write('No endpoint')
    //     res.end()
    // }
})

server.listen(Number(process.argv[2]))