const validator = require('validator');

const options = {
    protocols: ['http','https','ftp'],
    require_protocol: true
}

const valid = (url) => {
    if (validator.isURL(url, options)) {
        return true
    }
    return false
}

const valid2 = (assigned) => {
    if (!isNaN(assigned)) {
        return true
    }
    return false
}


module.exports = {valid, valid2}