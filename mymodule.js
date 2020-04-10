const fs = require('fs')

module.exports = function (dirName, extFile, callback) {
    fs.readdir(dirName, (error, data) => {
        if (error) { return callback(error) }

        filteredList = data.filter((fileName) => {
            return fileName.indexOf('.' + extFile) > 0
        })

        callback(null, filteredList)
    })
}