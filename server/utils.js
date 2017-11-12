const _ = require('lodash');

var getCountriesName = (countries) => {
    return countries.map(function(x) {
        return _.pick(x, ['name'])
    });

}

module.exports = {
    getCountriesName
}