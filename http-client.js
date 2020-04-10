const http = require('http')

http.get(process.argv[2], (response) => {

    response.on('error', function (error) {
        console.log(error)
    })

    response.on('data', function (data) {
        let encodedData = data.toString().split('\n')

        for (let i = 0; i < encodedData.length; i++) {
            console.log(encodedData[i])
        }
    })
})