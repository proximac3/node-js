const { default: axios } = require('axios')
const stepOne = require('./stepone')
const fs = require('fs');
const process = require('process');


async function webCat(url) {
    result = await axios.get(url)
    return result
};



function catOrWeb(param) {
    if (param.slice(0, 4) == 'http') {
        console.log(`Its a url: ${webCat(param)}`)
        return webCat(param)
    } else {
        console.log(`File Data : ${stepOne.cat(param)}`)
        return stepOne.cat(param)
    }
};


catOrWeb(process.argv[2])

module.exports={
    webCat: webCat,
    catOrWeb:catOrWeb
}