const http = require('http')

http.get(process.argv[2], (response) => {
    let result = ""
    response.setEncoding('utf8')
    response.on('data', function (data) {
        result = result + data
    })

    response.on("end", function () {
        console.log(result.length)
        console.log(result)
    })

})