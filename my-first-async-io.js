const fs = require('fs')

let lines = 0

fs.readFile(process.argv[2], (error, buffer) => {
    lines = buffer.toString().split('\n').length - 1
    console.log(lines)
});