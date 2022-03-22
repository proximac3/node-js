const fs = require('fs');
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log(`ERROR: ${err}`)
            process.exit(1)
        } else {
            console.log(`DATA : ${data}`)
            return data
        }
    })
};


// export cat function
module.exports = {
    cat: cat,
    name:"ram"
};


