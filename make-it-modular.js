const mymodule = require('./mymodule')

const dirName = process.argv[2]
const extFile = process.argv[3]

mymodule(dirName, extFile, (error, data) => {
    if (error) { console.log(error.toString()) }

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
})