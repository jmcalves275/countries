var http = require('http');
var options = {
  host: 'www.restcountries.eu',
  path: '/rest/v2/all'
};

var getCountries = (callback) => {
  var req = http.get(options, function (res) {
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function (chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function () {
      body = Buffer.concat(bodyChunks);
      var countries =  JSON.parse(body.toString());
      callback(countries)
      // ...and/or process the entire body here.
    })
  });
}

module.exports = {
  getCountries: getCountries
}
