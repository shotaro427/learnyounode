const fs = require('fs')

fs.readdir(process.argv[2], (error, list) => {
    filteredList = list.filter((fileName) => {
        return fileName.indexOf('.' + process.argv[3]) > 0
    })

    for (let i = 0; i < filteredList.length; i++) {
        console.log(filteredList[i])
    }
})