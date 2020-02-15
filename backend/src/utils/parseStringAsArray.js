
module.exports = function (stringAsArray) {
    return stringAsArray.split(',').map(tech => tech.trim())
}