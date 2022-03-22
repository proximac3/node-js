const { default: axios } = require('axios')
const stepOne = require('./stepone')
const stepTwo = require('./steptwo')
const fs = require('fs');
const process = require('process');


function handleOutput(text, out) {
    if (out) {
        fs.writeFile('output.txt', text, 'utf8', function (err) {
            if (err) {
                console.log(`Coundnt write ${out}: ${err}`)
                process.exit(1)
            }
        })

    } else {
        console.log(text)
    }
};


