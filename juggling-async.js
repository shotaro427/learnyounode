const async = require("async")
const http = require('http')

const urls = [process.argv[2], process.argv[3], process.argv[4]]

// urls.forEach((url) => {
//     http.get(url, (response) => {
//         response.setEncoding('utf8')
//         response.on('error', (error) => console.log(error))
//         response.on('data', (data) => console.log(data))
//     })
// })
urls.forEach(url => {
    callHttp(url)
});

async function callHttp(url) {
    await http.get(url, (response) => {
        let results = ""
        response.setEncoding('utf8')
        response.on('error', (error) => console.log(error))
        response.on('data', (data) => results = results + data)

        response.on("end", () => console.log(results))
    })
}